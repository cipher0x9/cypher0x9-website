"use client";

import { useEffect, useState } from "react";

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  icon: string;
  color: string;
}

export default function CryptoTicker() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([
    { symbol: "BTC", name: "Bitcoin", price: 0, change24h: 0, icon: "₿", color: "from-orange-500 to-yellow-500" },
    { symbol: "ETH", name: "Ethereum", price: 0, change24h: 0, icon: "Ξ", color: "from-blue-500 to-purple-500" },
    { symbol: "SOL", name: "Solana", price: 0, change24h: 0, icon: "◎", color: "from-purple-500 to-pink-500" },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Using CoinGecko API (no API key required for basic usage)
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        setCryptoData([
          {
            symbol: "BTC",
            name: "Bitcoin",
            price: data.bitcoin.usd,
            change24h: data.bitcoin.usd_24h_change,
            icon: "₿",
            color: "from-orange-500 to-yellow-500",
          },
          {
            symbol: "ETH",
            name: "Ethereum",
            price: data.ethereum.usd,
            change24h: data.ethereum.usd_24h_change,
            icon: "Ξ",
            color: "from-blue-500 to-purple-500",
          },
          {
            symbol: "SOL",
            name: "Solana",
            price: data.solana.usd,
            change24h: data.solana.usd_24h_change,
            icon: "◎",
            color: "from-purple-500 to-pink-500",
          },
        ]);
        setLoading(false);
        setError(false);
      } catch (err) {
        console.error("Error fetching crypto data:", err);
        setError(true);
        setLoading(false);
        // Set demo data if API fails
        setCryptoData([
          { symbol: "BTC", name: "Bitcoin", price: 43250.00, change24h: 2.5, icon: "₿", color: "from-orange-500 to-yellow-500" },
          { symbol: "ETH", name: "Ethereum", price: 2280.50, change24h: -1.2, icon: "Ξ", color: "from-blue-500 to-purple-500" },
          { symbol: "SOL", name: "Solana", price: 102.75, change24h: 5.8, icon: "◎", color: "from-purple-500 to-pink-500" },
        ]);
      }
    };

    fetchCryptoData();
    // Update every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6 rounded-2xl border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-3xl">₿</div>
          <h3 className="text-2xl font-bold text-white">Live Crypto Prices</h3>
        </div>
        {error && (
          <span className="text-xs text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
            Demo Mode
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cryptoData.map((crypto, index) => (
          <div
            key={crypto.symbol}
            className="relative group overflow-hidden"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="glass-card p-5 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 transform hover:scale-105">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${crypto.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{crypto.icon}</span>
                    <div>
                      <div className="font-bold text-white">{crypto.symbol}</div>
                      <div className="text-xs text-gray-400">{crypto.name}</div>
                    </div>
                  </div>
                </div>

                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-700 rounded w-32 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-20"></div>
                  </div>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-secondary mb-1">
                      ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        crypto.change24h >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {crypto.change24h >= 0 ? "↗" : "↘"}{" "}
                      {Math.abs(crypto.change24h).toFixed(2)}%
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ticker animation */}
      <div className="mt-4 overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker flex gap-8 animate-ticker">
            {[...cryptoData, ...cryptoData].map((crypto, index) => (
              <span key={index} className="text-primary/50 text-sm whitespace-nowrap">
                {crypto.icon} {crypto.symbol}: ${crypto.price.toLocaleString()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
