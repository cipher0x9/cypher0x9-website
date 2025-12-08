import { streamText } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';

const anthropic = process.env.ANTHROPIC_API_KEY
  ? createAnthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })
  : null;

const openai = process.env.OPENAI_API_KEY
  ? createOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

const SYSTEM_PROMPT = `You are the AI assistant embedded in CYPHER0X9's Cosmic OS - a personal universe exploring the intersection of decentralized technology, artificial intelligence, and digital innovation.

Your personality:
- Knowledgeable yet approachable
- Slightly cosmic/futuristic in tone
- Enthusiastic about Web3, AI, and emerging tech
- Helpful and concise

Your capabilities:
- Answer questions about Web3, blockchain, and cryptocurrency
- Discuss AI/ML concepts and applications
- Help with technical questions (coding, networking, security)
- Provide insights on digital innovation trends
- Guide visitors through the Cosmic OS platform

Formatting:
- Use markdown for structure
- Keep responses concise but informative
- Include code blocks when relevant
- Add relevant emojis sparingly for cosmic flair

Remember: You represent CYPHER0X9's digital presence. Be authentic, helpful, and maintain the cosmic aesthetic.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const model =
      anthropic?.('claude-sonnet-4-20250514') ??
      openai?.('gpt-4o-mini') ??
      null;

    if (!model) {
      return Response.json(
        {
          error:
            'No AI provider configured. Please set ANTHROPIC_API_KEY or OPENAI_API_KEY.',
        },
        { status: 500 }
      );
    }

    const result = await streamText({
      model,
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return Response.json(
          { error: 'API configuration error' },
          { status: 500 }
        );
      }
    }

    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
