"use client";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative overflow-hidden flex-row max-w-full  mx-auto justify-center text-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      {/* Experience cards */}
      <div className="w-full h-4/5 md:h-5/6  flex content-center  overflow-x-scroll p-10 space-x-5 snap-x snap-center snap-mandatory scrollbar-thin scrollbar-track-[#2d2c2c] scrollbar-thumb-accent-600/80 mt-28 ">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}