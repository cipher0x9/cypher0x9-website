"use client";

import WorldClocks from "./WorldClocks";
import CryptoTicker from "./CryptoTicker";
import VisitorCounter from "./VisitorCounter";

export default function WorldIntelligence() {
  return (
    <section id="world-clock" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              🌍 World Intelligence Dashboard
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time global data at your fingertips
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* World Clocks - Takes 2 columns */}
          <div className="lg:col-span-2">
            <WorldClocks />
          </div>

          {/* Visitor Counter */}
          <div className="lg:col-span-1">
            <VisitorCounter />
          </div>
        </div>

        {/* Crypto Ticker - Full width */}
        <div className="w-full">
          <CryptoTicker />
        </div>
      </div>
    </section>
  );
}
