import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'Cypher0x9 Cosmic OS',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || 'demo',
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true,
});

// Chain metadata for UI
export const chainMetadata = {
  [mainnet.id]: {
    name: 'Ethereum',
    color: '#627EEA',
    icon: '⟠',
  },
  [polygon.id]: {
    name: 'Polygon',
    color: '#8247E5',
    icon: '⬡',
  },
  [optimism.id]: {
    name: 'Optimism',
    color: '#FF0420',
    icon: '🔴',
  },
  [arbitrum.id]: {
    name: 'Arbitrum',
    color: '#28A0F0',
    icon: '🔵',
  },
  [base.id]: {
    name: 'Base',
    color: '#0052FF',
    icon: '🔷',
  },
  [sepolia.id]: {
    name: 'Sepolia',
    color: '#CFB5F0',
    icon: '🧪',
  },
};
