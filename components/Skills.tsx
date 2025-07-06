"use client";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center max-w-[2000px] mx-auto items-center justify-center px-4 md:px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 md:top-40 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      {/* Skills Grid Container */}
      <div className="w-full max-w-6xl mt-16 md:mt-20 mb-20">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-4 lg:gap-5 place-items-center">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ 
                x: index % 2 === 0 ? -50 : 50, 
                opacity: 0 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.05
              }}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <div className="relative">
                <motion.img
                  className="rounded-full border-2 border-gray-500 object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
                  src={urlFor(skill?.image).url()}
                  alt={skill.title}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out bg-white rounded-full flex items-center justify-center">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black">
                    {skill.progress}%
                  </p>
                </div>
              </div>
              
              {/* Skill Title - Always visible on mobile, hover on desktop */}
              <div className="mt-2 md:mt-3">
                <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-300 font-medium text-center leading-tight md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                  {skill.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Legend - Hidden on mobile to save space */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex items-center space-x-4 lg:space-x-6 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs lg:text-sm text-gray-300">Expert (80%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs lg:text-sm text-gray-300">Proficient (60-79%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs lg:text-sm text-gray-300">Learning (40-59%)</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}