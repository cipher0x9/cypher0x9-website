import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'CYPHER0X9 | Cosmic OS',
    template: '%s | CYPHER0X9',
  },
  description:
    'Exploring the intersection of decentralized technology, artificial intelligence, and digital innovation. Web3 Explorer | AI Researcher | Network Engineer | Content Creator',
  keywords: [
    'Web3',
    'AI',
    'Blockchain',
    'Cryptocurrency',
    'DeFi',
    'NFT',
    'Machine Learning',
    'Network Engineering',
    'Content Creator',
    'Digital Innovation',
  ],
  authors: [{ name: 'Cypher0x9' }],
  creator: 'Cypher0x9',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cypher0x9.com',
    siteName: 'CYPHER0X9 Cosmic OS',
    title: 'CYPHER0X9 | Cosmic OS',
    description:
      'Exploring the intersection of decentralized technology, artificial intelligence, and digital innovation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CYPHER0X9 Cosmic OS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CYPHER0X9 | Cosmic OS',
    description:
      'Exploring the intersection of decentralized technology, artificial intelligence, and digital innovation.',
    creator: '@cypher0x9',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030014' },
    { media: '(prefers-color-scheme: light)', color: '#030014' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#030014] text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
