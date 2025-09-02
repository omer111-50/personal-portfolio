import { motion } from "framer-motion";
import React from "react";

type Props = {
  intensity?: number; // 0..1 for opacity scale
  className?: string;
};

export default function BrandBackdrop({
  intensity = 1,
  className = "",
}: Props) {
  const o1 = 0.12 * intensity;
  const o2 = 0.1 * intensity;
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    >
      {/* Static layered radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(80% 60% at 100% 0%, color-mix(in oklab, var(--color-secondary) ${Math.round(
              o1 * 100
            )}%, transparent), transparent),` +
            `radial-gradient(70% 60% at 0% 10%, color-mix(in oklab, var(--color-primary) ${Math.round(
              o2 * 100
            )}%, transparent), transparent)`,
        }}
      />
      {/* Soft animated blobs */}
      <motion.div
        className="absolute -top-16 -left-16 w-40 h-40 rounded-full blur-3xl"
        style={{
          backgroundColor: `color-mix(in oklab, var(--color-primary) ${
            o1 * 100
          }%, transparent)`,
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -right-12 w-32 h-32 rounded-full blur-3xl"
        style={{
          backgroundColor: `color-mix(in oklab, var(--color-secondary) ${
            o2 * 100
          }%, transparent)`,
        }}
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}
