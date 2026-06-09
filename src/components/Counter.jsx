    import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: duration });
    return () => controls.stop();
  }, [to, duration, count]);

  return <motion.span>{rounded}</motion.span>;
}