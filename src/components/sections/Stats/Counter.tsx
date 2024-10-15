import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 *
 * @param root0
 * @param root0.value
 */

type Props = {
  value: number;
  direction?: "up" | "down";
  className?: string;
};

export default function Counter({ value, direction = "up", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });

  const formatNumber = (num: number) => {
    if (num < 1000) {
      return num.toString();
    }

    if (num >= 1000 && num < 1_000_000) {
      return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }

    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
  };

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = formatNumber(Number(latest.toFixed(0)));
        }
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}
