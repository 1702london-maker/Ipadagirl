"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 10000, label: "Girls Targeted", suffix: "", prefix: "" },
  { end: 80, label: "Reached (Maiden)", suffix: "+", prefix: "" },
  { end: 1, label: "School Reached", suffix: "", prefix: "" },
  { end: 36, label: "States Vision", suffix: "", prefix: "" },
];

function Counter({ end, suffix, prefix }: { end: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  const formatted = count >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-wellbeing-teal mb-2 tabular-nums">
      {prefix}{formatted}{suffix}
    </div>
  );
}

export default function CounterStrip() {
  return (
    <section className="bg-ink-navy py-16">
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i < 3 ? "md:border-r border-white/10" : ""}`}>
              <Counter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
              <div className="font-label-md text-label-md text-surface-variant uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
