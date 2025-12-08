import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIAssistant } from '@/components/chat/ai-assistant';
import { CosmicParticleField } from '@/components/effects/CosmicParticleField';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CosmicParticleField />
      <Header />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
      <AIAssistant />
    </>
  );
}
