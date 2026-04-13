import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  /** If true, animation starts only when the element enters the viewport */
  triggerOnView?: boolean;
}

export function AnimatedCounter({
  value,
  duration = 1400,
  suffix = "",
  prefix = "",
  decimals = 0,
  triggerOnView = false,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(triggerOnView ? 0 : value);
  const [started, setStarted] = useState(!triggerOnView);
  const containerRef = useRef<HTMLSpanElement>(null);
  const startRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // IntersectionObserver to trigger on viewport entry
  useEffect(() => {
    if (!triggerOnView) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!started) return;
    const start = startRef.current;
    const end = value;
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - (1 - progress) ** 3;
      const current = start + (end - start) * eased;
      setDisplayValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        startRef.current = end;
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, started]);

  const formatted = displayValue.toFixed(decimals);

  return (
    <span ref={containerRef}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
