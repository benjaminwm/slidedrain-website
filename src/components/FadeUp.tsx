"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[30px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
