"use client";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border border-[#ffae00] opacity-30 rounded-full h-[200px] w-[200px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
      <div
        className="absolute border border-[#f7b11b] opacity-30 rounded-full h-[300px] w-[300px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
      <div
        className="absolute border border-[#b88517]  opacity-30 rounded-full h-[500px] w-[500px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
      <div
        className="absolute border border-red-600 opacity-20 h-[510px] w-[510px] md:h-[650px] md:w-[650px] 
            animate-pulse mt-64 md:mt:52 rounded-full"
      />
      <div />
      <div
        className="absolute border border-gray-500 opacity-30 rounded-full h-[800px] w-[800px] mt-64 md:mt:52 
            animate-ping"
      />
      <div />
    </motion.div>
  );
}