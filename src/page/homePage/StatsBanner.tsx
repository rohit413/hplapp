"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { STATS_DATA } from "@/constants/HOME_PAGE";
import Image from "next/image";

export default function StatsBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  // Initialize with 0s
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));

  // Use useRef for animation frames to avoid cleanup issues
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      const newCounts = STATS_DATA.map((item) =>
        Math.floor(item.value * percentage)
      );

      setCounts(newCounts);

      if (progress < duration) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center mt-16 justify-around gap-10 bg-theme py-12 px-4 text-white md:flex-row md:gap-20"
    >
      <Image
        src="/assets/images/homePage/map.jpg"
        alt="World map"
        width={1000}
        height={1000}
        className="absolute size-full object-cover opacity-10"
      />

      {STATS_DATA.map(({ label, suffix }, i) => (
        <div key={label} className="space-y-2 text-center z-10">
          <p className="lg:text-3xl text-xl font-semibold">{label}</p>
          <h2 className="lg:text-7xl text-5xl font-extrabold">
            {counts[i]}
            {suffix ?? ""}
          </h2>
        </div>
      ))}
    </section>
  );
}
