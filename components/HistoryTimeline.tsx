"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = {
  date: string;
  title: string;
  description: string;
};

export default function HistoryTimeline({ items }: { items: Item[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height + windowHeight;
      const passed = windowHeight - rect.top;

      const percent = Math.min(Math.max(passed / total, 0), 1);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Image
        src="/Images/backgrounds/Group 19.svg"
        alt="Abstract Background"
        width={3000}
        height={1950}
        className="absolute top-50 z-[-1]"
      />
      <section className="w-full py-32 px-6 md:px-12 lg:px-20 ">
        <div ref={containerRef} className="mx-auto max-w-7xl">
          {/* TITLE */}
          <div className="text-center mb-28">
            <div className="text-center mb-6">
              <span className="px-5 py-2 rounded-full border border-yellow-500 text-sm text-white">
                {items[0].title}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              {items[0].description}{" "}
            </h2>
            <div className="w-full flex justify-center">
              <Image
                src="/Images/logos/c59d236a-6cf4-4ae8-a772-27bd0d9b14b3.png"
                alt="Logo Moneda"
                width={270}
                height={150}
              />
            </div>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* gray base line */}
            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-zinc-800 hidden md:block" />

            {/* yellow progress line */}
            <div
              className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 bg-yellow-500 transition-all duration-200 hidden md:block"
              style={{ height: `${progress * 100}%` }}
            />

            {/* ITEMS */}
            <div className="space-y-32">
              {items.slice(1).map((item, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className={`flex w-full ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="relative w-full md:w-[42%]">
                      {/* DOT */}

                      {/* CARD */}
                      <div className="group rounded-3xl border border-yellow-500/40 bg-gradient-to-b from-white/5 to-transparent p-8 text-center transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                        <div className=" mb-6">
                          <span className="px-5 py-2 rounded-full border border-yellow-500 text-sm text-white">
                            {item.date}
                          </span>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">
                          {item.title}
                        </h3>

                        <p className="text-zinc-400 leading-relaxed text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
