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
        scale: [1, 1.2, 1.2, 1.5, 1],
        opacity: [0.1, 0.3, 0.5, 0.7, 0.1, 1.0],
      }}
      transition={{
        duration: 3.5,
      }}
      className="relative flex justify-center items-center"
    >
      {/* Data visualization circles with neural network theme */}
      <div className="absolute border border-primary-500/30 opacity-40 rounded-full h-[200px] w-[200px] mt-64 md:mt-52 animate-pulse" />
      
      <div className="absolute border border-accent-400/40 opacity-50 rounded-full h-[300px] w-[300px] mt-64 md:mt-52 animate-ping" />
      
      <div className="absolute border border-data-purple/40 opacity-40 rounded-full h-[450px] w-[450px] mt-64 md:mt-52 animate-pulse" />
      
      <div className="absolute border border-data-cyan/30 opacity-30 rounded-full h-[600px] w-[600px] mt-64 md:mt-52 animate-ping" style={{ animationDelay: '1s' }} />
      
      <div className="absolute border border-data-orange/20 opacity-25 rounded-full h-[750px] w-[750px] mt-64 md:mt-52 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Neural network nodes */}
      <div className="absolute w-3 h-3 bg-primary-400 rounded-full top-1/3 left-1/4 animate-pulse" />
      <div className="absolute w-2 h-2 bg-accent-400 rounded-full top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute w-4 h-4 bg-data-purple rounded-full bottom-1/3 left-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute w-2 h-2 bg-data-cyan rounded-full top-2/3 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Data flow lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent animate-data-stream" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent-400/50 to-transparent animate-data-stream" style={{ animationDelay: '1s' }} />
    </motion.div>
  );
}