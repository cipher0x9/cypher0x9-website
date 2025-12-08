'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
mport { useState, type ReactNode } from 'react';
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
