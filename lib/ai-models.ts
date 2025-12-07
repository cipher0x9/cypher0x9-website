import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// Model providers configuration
export const providers = {
  openai: createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }),
  anthropic: createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  }),
  google: createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_AI_API_KEY,
  }),
  // Grok uses OpenAI-compatible API
  grok: createOpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: 'https://api.x.ai/v1',
  }),
  // Perplexity uses OpenAI-compatible API
  perplexity: createOpenAI({
    apiKey: process.env.PERPLEXITY_API_KEY,
    baseURL: 'https://api.perplexity.ai',
  }),
};

// Model configurations with capabilities
export const models = {
  // Claude - Best for reasoning and code
  claude: {
    provider: 'anthropic',
    model: 'claude-sonnet-4-20250514',
    capabilities: ['reasoning', 'code', 'analysis', 'writing'],
    description: 'Advanced reasoning and code generation',
    maxTokens: 8192,
  },
  // GPT-4 - General purpose
  gpt4: {
    provider: 'openai',
    model: 'gpt-4-turbo',
    capabilities: ['general', 'creative', 'analysis'],
    description: 'General purpose AI assistant',
    maxTokens: 4096,
  },
  // Grok - Web3 and trends
  grok: {
    provider: 'grok',
    model: 'grok-beta',
    capabilities: ['web3', 'trends', 'realtime', 'crypto'],
    description: 'Real-time data and Web3 expertise',
    maxTokens: 4096,
  },
  // Perplexity - Research
  perplexity: {
    provider: 'perplexity',
    model: 'llama-3.1-sonar-large-128k-online',
    capabilities: ['research', 'search', 'citations'],
    description: 'Real-time web research with citations',
    maxTokens: 4096,
  },
  // Gemini - Crypto and math
  gemini: {
    provider: 'google',
    model: 'gemini-1.5-pro',
    capabilities: ['math', 'crypto', 'multimodal', 'analysis'],
    description: 'Advanced mathematical and crypto analysis',
    maxTokens: 8192,
  },
} as const;

export type ModelKey = keyof typeof models;

// Intent detection for auto-routing
export const intentPatterns = {
  code: [
    /\b(code|function|implement|debug|fix|refactor|programming|typescript|javascript|python|rust|solidity)\b/i,
    /\b(api|endpoint|database|backend|frontend)\b/i,
  ],
  reasoning: [
    /\b(explain|why|how|analyze|compare|evaluate|think|reason)\b/i,
    /\b(logic|argument|proof|deduce)\b/i,
  ],
  web3: [
    /\b(web3|blockchain|crypto|ethereum|bitcoin|defi|nft|token|wallet|smart contract)\b/i,
    /\b(dao|dapp|metamask|uniswap|aave)\b/i,
  ],
  trends: [
    /\b(trending|latest|news|current|today|recent)\b/i,
    /\b(twitter|x\.com|social media)\b/i,
  ],
  research: [
    /\b(research|study|paper|article|source|citation|reference)\b/i,
    /\b(find|search|look up|discover)\b/i,
  ],
  math: [
    /\b(math|calculate|equation|formula|theorem|proof)\b/i,
    /\b(algebra|calculus|statistics|probability)\b/i,
  ],
  crypto: [
    /\b(encrypt|decrypt|hash|signature|key)\b/i,
    /\b(cryptography|cipher|security)\b/i,
  ],
};

// Route query to best model
export function routeToModel(query: string): ModelKey {
  // Check for code/reasoning patterns -> Claude
  for (const pattern of [...intentPatterns.code, ...intentPatterns.reasoning]) {
    if (pattern.test(query)) return 'claude';
  }

  // Check for Web3/trends patterns -> Grok
  for (const pattern of [...intentPatterns.web3, ...intentPatterns.trends]) {
    if (pattern.test(query)) return 'grok';
  }

  // Check for research patterns -> Perplexity
  for (const pattern of intentPatterns.research) {
    if (pattern.test(query)) return 'perplexity';
  }

  // Check for math/crypto patterns -> Gemini
  for (const pattern of [...intentPatterns.math, ...intentPatterns.crypto]) {
    if (pattern.test(query)) return 'gemini';
  }

  // Default to Claude for general queries
  return 'claude';
}

// Get provider instance for a model
export function getModelInstance(modelKey: ModelKey) {
  const config = models[modelKey];
  const provider = providers[config.provider as keyof typeof providers];

  return provider(config.model);
}
