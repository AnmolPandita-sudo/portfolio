// components/PageLoader.tsx
"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        className="w-20 h-20 rounded-full border-4 border-transparent border-t-primary-400 border-b-accent-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border-4 border-t-accent-400 border-b-primary-400"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
        />
      </motion.div>
      <motion.span
        className="mt-6 text-primary-400 font-mono text-sm animate-pulse"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        Loading...
      </motion.span>
    </div>
  );
}
