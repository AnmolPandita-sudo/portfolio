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
        <h1 className=" text-sm md:text-3xl lg:text-4xl  section-title text-center uppercase tracking-[16px] ml-5 ">About</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="space-y-8 md:space-y-10 px-0 md:px-10 md:mt-32 mt-40 z-10">
        {/* Stats cards */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="data-card text-center">
            <div className="text-2xl font-bold text-primary-400 font-mono">1</div>
            <div className="text-xs text-neural-400">Years Experience</div>
          </div>
          <div className="data-card text-center">
            <div className="text-2xl font-bold text-accent-400 font-mono">10+</div>
            <div className="text-xs text-neural-400">ML Models</div>
          </div>
          <div className="data-card text-center">
            <div className="text-2xl font-bold text-data-purple font-mono">50+</div>
            <div className="text-xs text-neural-400">Dashboards</div>
          </div>
          <div className="data-card text-center">
            <div className="text-2xl font-bold text-data-orange font-mono">10+</div>
            <div className="text-xs text-neural-400">Certifications</div>
          </div>
        </div> */}

        <div className="space-y-6 md:w-3/4">
          <h4 className="text-2xl md:text-4xl font-bold font-display">
            Transforming{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Data
            </span>{" "}
            into{" "}
            <span className="bg-gradient-to-r from-accent-400 to-data-purple bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </h4>
          
          <div className="space-y-4 ">
            <p className="text-sm md:text-lg text-neural-200 leading-relaxed">
              {pageInfo?.backgroundInformation}
            </p>
            
            {/* Specializations */}
            {/* <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Machine Learning",
                "Statistical Analysis", 
                "Data Visualization",
                "Predictive Modeling",
                "Business Intelligence",
                "Deep Learning"
              ].map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div> */}
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
        <div className="relative w-60 mb-7 md:mb-0 -mt-7 md:mt-7 aspect-square sm:w-32 md:w-40 lg:w-60 xl:w-80">
          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            alt="About"
            fill
            className="rounded-full md:rounded-xl object-cover border-2 border-primary-500/30 shadow-2xl shadow-primary-500/20"
            sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 208px, 240px"
          />
        </div>
      </div>

      </motion.div>
    </motion.div>
  );
}