"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 data-grid-bg opacity-10"></div>
      
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <h3 className="section-title text-center">About</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="space-y-8 md:space-y-10 px-0 md:px-10 md:mt-32 mt-40 z-10">

        <div className="space-y-6">
        <h4 className="text-2xl md:text-4xl font-bold font-display">
          Turning{" "}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Data into Intelligence
          </span>{" "}
          with{" "}
          <span className="bg-gradient-to-r from-accent-400 to-primary-500 bg-clip-text text-transparent">
            Scalable AI & Systems
          </span>
        </h4>

          
          <div className="space-y-4">
            <p className="text-sm md:text-lg text-cyber-200 leading-relaxed">
              {pageInfo?.backgroundInformation}
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="relative md:flex md:items-center">
          <div className="relative w-72 md:h-92 lg:h-96 xl:h-96 mb-10 md:mb-0 aspect-square md:w-52 lg:w-64 xl:w-72">
            <Image
              src={urlFor(pageInfo?.profilePic).url()}
              alt="About"
              fill
              className="rounded-full md:rounded-xl object-cover border-2 border-primary-500/30 shadow-2xl shadow-primary-500/20"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 208px, 240px"
            />
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}