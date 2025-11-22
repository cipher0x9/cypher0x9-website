"use client";

import { useEffect, useState } from "react";

export default function AnimatedAvatar() {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Random blinking effect
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto mb-8">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse"></div>

      {/* Avatar container with breathing animation */}
      <div className="relative w-full h-full animate-breathing">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <defs>
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00ff88" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="faceGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#00ff88" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="url(#headGradient)"
            stroke="url(#faceGlow)"
            strokeWidth="2"
            className="animate-pulse"
          />

          {/* Face geometric design */}
          <circle cx="100" cy="100" r="70" fill="#0a0e27" opacity="0.9" />

          {/* Eyes */}
          <g className="eyes">
            {/* Left eye */}
            <ellipse
              cx="75"
              cy="90"
              rx="12"
              ry={isBlinking ? "2" : "18"}
              fill="#00d4ff"
              className="transition-all duration-150"
            >
              <animate
                attributeName="opacity"
                values="1;0.7;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </ellipse>
            <circle
              cx="75"
              cy="90"
              r="6"
              fill="#ffffff"
              opacity={isBlinking ? "0" : "1"}
              className="transition-opacity duration-150"
            />

            {/* Right eye */}
            <ellipse
              cx="125"
              cy="90"
              rx="12"
              ry={isBlinking ? "2" : "18"}
              fill="#00ff88"
              className="transition-all duration-150"
            >
              <animate
                attributeName="opacity"
                values="1;0.7;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </ellipse>
            <circle
              cx="125"
              cy="90"
              r="6"
              fill="#ffffff"
              opacity={isBlinking ? "0" : "1"}
              className="transition-opacity duration-150"
            />
          </g>

          {/* Nose - geometric style */}
          <path
            d="M 100 95 L 105 115 L 95 115 Z"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Mouth - subtle smile */}
          <path
            d="M 80 125 Q 100 135 120 125"
            fill="none"
            stroke="url(#faceGlow)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-pulse"
          />

          {/* Decorative elements - mathematical symbols */}
          <text
            x="40"
            y="60"
            fill="#00d4ff"
            fontSize="16"
            opacity="0.3"
            className="animate-float"
          >
            ∅
          </text>
          <text
            x="150"
            y="60"
            fill="#00ff88"
            fontSize="16"
            opacity="0.3"
            className="animate-float-delayed"
          >
            Σ
          </text>
          <text
            x="45"
            y="150"
            fill="#00ff88"
            fontSize="14"
            opacity="0.3"
            className="animate-float"
          >
            ∞
          </text>
          <text
            x="145"
            y="145"
            fill="#00d4ff"
            fontSize="14"
            opacity="0.3"
            className="animate-float-delayed"
          >
            π
          </text>

          {/* Circuit-like decorative lines */}
          <circle cx="55" cy="100" r="3" fill="#00d4ff" opacity="0.4">
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="145" cy="100" r="3" fill="#00ff88" opacity="0.4">
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-20 right-10 w-1.5 h-1.5 bg-secondary rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-16 w-1 h-1 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-20 w-2 h-2 bg-secondary rounded-full animate-float-delayed"></div>
      </div>
    </div>
  );
}
