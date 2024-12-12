import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: number;
  duration?: number; // тривалість анімації в мілісекундах
  className?: string;
};

export default function Counter({ value, duration = 2000, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(ref, { once: true });

  const formatNumber = (num: number) => {
    if (num < 1000) return num.toString();
    if (num < 1_000_000)
      return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
  };

  useEffect(() => {
    if (isInView) {
      const startTime = performance.now();

      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        setDisplayValue(Math.round(progress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span className={className} ref={ref}>
      {formatNumber(displayValue)}
    </span>
  );
}
