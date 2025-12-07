import { streamText } from 'ai';
import { z } from 'zod';
import {
  models,
  routeToModel,
  getModelInstance,
  type ModelKey,
} from '@/lib/ai-models';

// Request schema
const requestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system']),
      content: z.string(),
    })
  ),
  model: z.string().optional(),
  autoRoute: z.boolean().default(true),
});

// System prompts for each model type
const systemPrompts: Record<ModelKey, string> = {
  claude: `You are a highly capable AI assistant integrated into CYPHER0X9's Cosmic OS platform. You excel at:
- Deep reasoning and analysis
- Code generation and debugging across multiple languages
- Complex problem-solving
- Technical writing and documentation

Maintain a cosmic, futuristic tone while being helpful and precise. Use markdown for formatting.`,

  gpt4: `You are an AI assistant in CYPHER0X9's Cosmic OS. You provide:
- Clear, comprehensive explanations
- Creative solutions
- Balanced perspectives

Maintain the cosmic aesthetic of the platform.`,

  grok: `You are Grok, integrated into CYPHER0X9's Cosmic OS. You specialize in:
- Web3, blockchain, and cryptocurrency insights
- Real-time trends and market analysis
- DeFi protocols and smart contracts
- NFT ecosystem and tokenomics

Be direct, insightful, and add a touch of wit. Share alpha when relevant.`,

  perplexity: `You are a research-focused AI in CYPHER0X9's Cosmic OS. You excel at:
- Finding accurate, up-to-date information
- Providing citations and sources
- Synthesizing multiple perspectives
- Academic and technical research

Always cite sources when possible. Be thorough but concise.`,

  gemini: `You are Gemini, integrated into CYPHER0X9's Cosmic OS. You specialize in:
- Mathematical analysis and proofs
- Cryptographic concepts
- Multi-modal reasoning
- Scientific computing

Be precise with mathematical notation and provide step-by-step explanations.`,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: 'Invalid request body', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { messages, model: requestedModel, autoRoute } = parsed.data;

    // Determine which model to use
    let modelKey: ModelKey;

    if (requestedModel && requestedModel in models) {
      modelKey = requestedModel as ModelKey;
    } else if (autoRoute) {
      // Auto-route based on the last user message
      const lastUserMessage = messages
        .filter((m) => m.role === 'user')
        .pop()?.content;
      modelKey = lastUserMessage ? routeToModel(lastUserMessage) : 'claude';
    } else {
      modelKey = 'claude';
    }

    const modelConfig = models[modelKey];
    const modelInstance = getModelInstance(modelKey);
    const systemPrompt = systemPrompts[modelKey];

    // Stream the response
    const result = streamText({
      model: modelInstance,
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    // Return streaming response with model info in headers
    const response = result.toTextStreamResponse();

    // Create a new response with custom headers
    const headers = new Headers(response.headers);
    headers.set('X-Model-Used', modelKey);
    headers.set('X-Model-Provider', modelConfig.provider);

    return new Response(response.body, {
      status: response.status,
      headers,
    });
  } catch (error) {
    console.error('AI Router Error:', error);

    // Handle specific provider errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return Response.json(
          { error: 'API configuration error', model: 'unknown' },
          { status: 500 }
        );
      }
      if (error.message.includes('rate limit')) {
        return Response.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }

    return Response.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

// GET endpoint for model info
export async function GET() {
  const modelInfo = Object.entries(models).map(([key, config]) => ({
    id: key,
    provider: config.provider,
    capabilities: config.capabilities,
    description: config.description,
  }));

  return Response.json({
    models: modelInfo,
    routing: {
      enabled: true,
      patterns: [
        { category: 'code', routes_to: 'claude' },
        { category: 'reasoning', routes_to: 'claude' },
        { category: 'web3', routes_to: 'grok' },
        { category: 'trends', routes_to: 'grok' },
        { category: 'research', routes_to: 'perplexity' },
        { category: 'math', routes_to: 'gemini' },
        { category: 'crypto', routes_to: 'gemini' },
      ],
    },
  });
}
