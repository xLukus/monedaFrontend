"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // 🔥 kill old triggers when navigating
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // small delay so DOM is ready after navigation
    const ctx = gsap.context(() => {
      // SECTION 1
      gsap.from(".arm h1, .arm h2", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".arm",
          start: "top 70%",
        },
      });

      gsap.from(".arm img", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".arm",
          start: "top 70%",
        },
      });

      // SECTION 2
      gsap.from(".arm + div h2", {
        opacity: 0,
        x: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".arm + div",
          start: "top 75%",
        },
      });

      // SECTION 3
      gsap.from(".arm + div + div h2", {
        opacity: 0,
        x: -80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".arm + div + div",
          start: "top 75%",
        },
      });

      gsap.from(".arm + div + div img", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".arm + div + div",
          start: "top 75%",
        },
      });
    });

    // refresh after layout shift
    ScrollTrigger.refresh();

    return () => ctx.revert(); // clean on unmount
  }, [pathname]); // 🔥 rerun on navigation

  return null;
}
