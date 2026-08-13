"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-14T09:00:00+01:00").getTime();

export default function IbadanCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center bg-white/10 rounded-2xl px-6 py-4 min-w-[80px]">
          <span className="text-4xl font-bold text-white tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-widest text-white/70 mt-1">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
