"use client";

import { useEffect, useState } from "react";

interface TimeZone {
  city: string;
  timezone: string;
  flag: string;
  color: string;
}

const timeZones: TimeZone[] = [
  { city: "New York", timezone: "America/New_York", flag: "🇺🇸", color: "from-blue-500 to-red-500" },
  { city: "London", timezone: "Europe/London", flag: "🇬🇧", color: "from-red-600 to-blue-600" },
  { city: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵", color: "from-red-500 to-white" },
  { city: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪", color: "from-green-600 to-red-600" },
  { city: "Mumbai", timezone: "Asia/Kolkata", flag: "🇮🇳", color: "from-orange-500 to-green-600" },
  { city: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺", color: "from-blue-600 to-red-600" },
];

export default function WorldClocks() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});
  const [dates, setDates] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      const newDates: { [key: string]: string } = {};

      timeZones.forEach((tz) => {
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: tz.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        const dateString = now.toLocaleDateString("en-US", {
          timeZone: tz.timezone,
          month: "short",
          day: "numeric",
        });
        newTimes[tz.city] = timeString;
        newDates[tz.city] = dateString;
      });

      setTimes(newTimes);
      setDates(newDates);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-3xl">🌐</div>
        <h3 className="text-2xl font-bold text-white">World Clocks</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {timeZones.map((tz, index) => (
          <div
            key={tz.city}
            className="relative group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="glass-card p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tz.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tz.flag}</span>
                    <span className="font-semibold text-white">{tz.city}</span>
                  </div>
                  <span className="text-xs text-gray-400">{dates[tz.city]}</span>
                </div>

                <div className="text-2xl font-mono font-bold text-primary">
                  {times[tz.city] || "Loading..."}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
