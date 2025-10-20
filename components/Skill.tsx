"use client";
import { motion } from "framer-motion";
import { Skill as mySkill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: mySkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer md:px-5 md:hover:shadow-2xl ">
      <motion.img
        initial={{ x: directionLeft ? -30 : 30, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full border-2 border-accent-600 object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out mb-8 mr-3"
        src={urlFor(skill?.image).url()}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
        <p className="text-center w-auto">{skill.title}</p>
      </div>
    </div>
  );
}