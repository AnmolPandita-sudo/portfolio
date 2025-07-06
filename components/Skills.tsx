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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 mt-20">
        {skills?.map((skill, index) => (
          <motion.div
            key={skill._id}
            initial={{ 
              x: index % 2 === 0 ? -200 : 200, 
              opacity: 0 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }}
            transition={{ 
              duration: 1,
              delay: index * 0.1
            }}
            className="group relative flex cursor-pointer"
          >
            <motion.img
              className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
              src={urlFor(skill?.image).url()}
              alt={skill.title}
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-lg md:text-xl xl:text-2xl font-bold text-black opacity-100">
                  {skill.progress}%
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <p className="text-xs md:text-sm text-gray-300 font-medium whitespace-nowrap">
                {skill.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Legend */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex items-center space-x-6 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-300">Expert (80%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs text-gray-300">Proficient (60-79%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-300">Learning (40-59%)</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}