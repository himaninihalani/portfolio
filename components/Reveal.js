"use client";

import { useEffect, useRef } from "react";

// Wraps children and adds the `in-view` class once the element scrolls
// into the viewport. Respects prefers-reduced-motion by doing nothing
// (CSS also guards this, this is belt-and-braces).
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("in-view");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Safety net: if the observer never fires (unsupported browser, a
    // screenshot/print tool that resizes without a real scroll, etc.)
    // make sure the content still appears rather than staying hidden.
    const fallback = window.setTimeout(() => el.classList.add("in-view"), 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
