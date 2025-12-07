# CYPHER0X9 Cosmic OS

A personal cosmic operating system exploring the intersection of decentralized technology, artificial intelligence, and digital innovation.

![CYPHER0X9](https://img.shields.io/badge/CYPHER0X9-Cosmic%20OS-6B21A8?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMEQ5RkYiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## Features

- **Multi-Model AI Router** - Intelligent routing across Claude, GPT-4, Grok, Perplexity, and Gemini
- **Web3 Integration** - Wallet connections via RainbowKit supporting multiple chains
- **Cosmic UI Theme** - Beautiful space-inspired design with glassmorphism and neon effects
- **AI Chat Assistant** - Embedded AI assistant powered by Claude
- **Knowledge Graph** - Interactive exploration of interconnected content
- **Responsive Design** - Fully responsive across all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI SDK**: Vercel AI SDK
- **Web3**: RainbowKit, Wagmi, Viem
- **State**: TanStack Query
- **Content**: Contentlayer

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/cypher0x9/cypher0x9-website.git
cd cypher0x9-website

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Fill in your API keys in .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
cypher0x9/
├── app/
│   ├── (marketing)/          # Marketing pages with header/footer
│   │   ├── page.tsx          # Landing page
│   │   ├── about/page.tsx    # About page
│   │   └── layout.tsx        # Marketing layout
│   ├── universe/page.tsx     # Knowledge graph
│   ├── learn/page.tsx        # Learning hub
│   ├── build/page.tsx        # Projects showcase
│   ├── lab/page.tsx          # Experiments
│   ├── api/
│   │   ├── chat/route.ts     # Streaming chat endpoint
│   │   ├── ai-router/route.ts # Multi-model AI router
│   │   └── health/route.ts   # Health check
│   ├── globals.css           # Cosmic theme CSS
│   ├── layout.tsx            # Root layout
│   └── providers.tsx         # React providers
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Navigation header
│   │   ├── footer.tsx        # Site footer
│   │   └── nav.tsx           # Navigation component
│   ├── chat/
│   │   └── ai-assistant.tsx  # AI chat widget
│   └── web3/
│       └── wallet-button.tsx # Wallet connection
├── lib/
│   ├── utils.ts              # Utility functions
│   ├── wagmi-config.ts       # Web3 configuration
│   └── ai-models.ts          # AI model routing
└── .env.local.example        # Environment template
```

## Environment Variables

Create a `.env.local` file with the following:

```bash
# AI Providers
ANTHROPIC_API_KEY=           # Claude (required for chat)
OPENAI_API_KEY=              # GPT-4 (optional)
GOOGLE_AI_API_KEY=           # Gemini (optional)
XAI_API_KEY=                 # Grok (optional)
PERPLEXITY_API_KEY=          # Perplexity (optional)

# Web3
NEXT_PUBLIC_WALLET_CONNECT_ID=  # WalletConnect Project ID
```

See `.env.local.example` for the complete list.

## AI Router

The multi-model AI router automatically selects the best model based on query intent:

| Intent | Model | Use Case |
|--------|-------|----------|
| Code, Reasoning | Claude | Complex problem-solving, code generation |
| Web3, Trends | Grok | Blockchain insights, real-time data |
| Research | Perplexity | Web search, citations |
| Math, Crypto | Gemini | Mathematical analysis, cryptography |

### API Endpoints

- `POST /api/chat` - Streaming chat with Claude
- `POST /api/ai-router` - Multi-model routing
- `GET /api/ai-router` - Model information
- `GET /api/health` - Health check

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cypher0x9/cypher0x9-website)

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## Roadmap

### Phase 1 - Foundation (Current)
- [x] Project setup with Next.js 14
- [x] Cosmic UI theme
- [x] Multi-model AI router
- [x] Web3 wallet integration
- [x] Core pages (Landing, About, Universe, Learn, Build, Lab)

### Phase 2 - Content
- [ ] Blog system with MDX
- [ ] Project detail pages
- [ ] Tutorial content
- [ ] Interactive code examples

### Phase 3 - Features
- [ ] 3D Knowledge Graph
- [ ] AI-powered search
- [ ] User authentication
- [ ] Progress tracking

### Phase 4 - Community
- [ ] Comments system
- [ ] Newsletter integration
- [ ] Discord integration
- [ ] NFT gating

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with cosmic energy by [CYPHER0X9](https://twitter.com/cypher0x9)
