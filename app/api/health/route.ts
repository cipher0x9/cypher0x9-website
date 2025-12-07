import { NextResponse } from 'next/server';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  version: string;
  services: {
    database: 'connected' | 'disconnected' | 'not_configured';
    ai: 'configured' | 'not_configured';
    web3: 'configured' | 'not_configured';
  };
  environment: string;
  uptime: number;
}

const startTime = Date.now();

export async function GET(): Promise<NextResponse<HealthStatus>> {
  const aiConfigured = !!(
    process.env.ANTHROPIC_API_KEY ||
    process.env.OPENAI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY
  );

  const web3Configured = !!process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

  const status: HealthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    services: {
      database: 'not_configured',
      ai: aiConfigured ? 'configured' : 'not_configured',
      web3: web3Configured ? 'configured' : 'not_configured',
    },
    environment: process.env.NODE_ENV || 'development',
    uptime: Math.floor((Date.now() - startTime) / 1000),
  };

  // Determine overall health
  if (!aiConfigured && !web3Configured) {
    status.status = 'degraded';
  }

  return NextResponse.json(status);
}

// HEAD request for simple health checks
export async function HEAD() {
  return new Response(null, { status: 200 });
}
