"use client";
type FAQItem = {
  q: string;
  a: string;
};
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-lg font-medium text-white">{item.q}</span>

              <ChevronDown
                className={`h-5 w-5 text-yellow-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-white/70 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
