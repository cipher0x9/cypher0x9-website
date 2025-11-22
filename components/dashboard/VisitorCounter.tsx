"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Get or initialize visitor count from localStorage
    const getVisitorCount = () => {
      if (typeof window !== "undefined") {
        const totalVisits = localStorage.getItem("totalVisitorCount");
        const lastVisit = localStorage.getItem("lastVisitDate");
        const today = new Date().toDateString();

        let total = totalVisits ? parseInt(totalVisits) : 0;
        let todayVisits = 0;

        // Check if this is a new visit today
        if (lastVisit !== today) {
          total += 1;
          todayVisits = 1;
          localStorage.setItem("totalVisitorCount", total.toString());
          localStorage.setItem("lastVisitDate", today);
          localStorage.setItem("todayVisitorCount", "1");
        } else {
          const todayStored = localStorage.getItem("todayVisitorCount");
          todayVisits = todayStored ? parseInt(todayStored) : 1;
        }

        return { total, today: todayVisits };
      }
      return { total: 0, today: 0 };
    };

    const counts = getVisitorCount();

    // Animate counter
    setIsAnimating(true);
    let currentCount = 0;
    const targetCount = counts.total;
    const increment = Math.ceil(targetCount / 50);

    const animateCount = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setVisitorCount(targetCount);
        clearInterval(animateCount);
        setIsAnimating(false);
      } else {
        setVisitorCount(currentCount);
      }
    }, 30);

    setTodayCount(counts.today);

    return () => clearInterval(animateCount);
  }, []);

  return (
    <div className="glass-card p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-3xl animate-spin-slow">🌍</div>
        <h3 className="text-2xl font-bold text-white">Visitors</h3>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6">
        {/* Total Visitors */}
        <div className="text-center p-6 glass-card rounded-xl border border-primary/20">
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">
            Total Visits
          </div>
          <div className={`text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${isAnimating ? "animate-pulse" : ""}`}>
            {visitorCount.toLocaleString()}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Live Tracking</span>
          </div>
        </div>

        {/* Today's Visitors */}
        <div className="text-center p-4 glass-card rounded-xl border border-secondary/20">
          <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
            Today
          </div>
          <div className="text-2xl font-bold text-secondary">
            +{todayCount}
          </div>
        </div>

        {/* Animated Globe */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="text-6xl animate-globe-spin">🌐</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="glass-card p-3 rounded-lg">
            <div className="text-xs text-gray-400">Avg/Day</div>
            <div className="text-lg font-bold text-primary">
              {Math.ceil(visitorCount / 7)}
            </div>
          </div>
          <div className="glass-card p-3 rounded-lg">
            <div className="text-xs text-gray-400">This Week</div>
            <div className="text-lg font-bold text-secondary">
              {Math.ceil(visitorCount * 0.3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
