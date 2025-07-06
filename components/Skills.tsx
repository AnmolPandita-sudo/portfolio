"use client";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-40 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-8 mt-20 px-4">
        {skills?.map((skill, index) => (
          <Skill 
            key={skill._id} 
            skill={skill} 
            directionLeft={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}