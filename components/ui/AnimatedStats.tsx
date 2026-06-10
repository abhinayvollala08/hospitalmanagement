"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

function useCountUp(target: number, duration: number = 2000, triggered: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);

  return count;
}

function StatItem({ stat, triggered, index }: { stat: Stat; triggered: boolean; index: number }) {
  const count = useCountUp(stat.value, 1800, triggered);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-blue-300 text-sm font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function AnimatedStats({ stats }: { stats: Stat[] }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
      role="list"
      aria-label="Clinic statistics"
    >
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} triggered={triggered} index={i} />
      ))}
    </div>
  );
}
