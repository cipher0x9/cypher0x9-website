'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
// import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
// import { wagmiConfig } from '@/lib/wagmi-config';
import { useState, type ReactNode } from 'react';
// import '@rainbow-me/rainbowkit/styles.css';
import { CosmicThemeProvider } from '@/components/theme/cosmic-theme-provider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CosmicThemeProvider>{children}</CosmicThemeProvider>
    </QueryClientProvider>
  );
}
