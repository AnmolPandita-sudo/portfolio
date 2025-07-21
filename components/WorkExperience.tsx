"use client";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  // Sort experiences by addition order (most recently added first)
  // This ensures newly added experiences always appear at the top, regardless of their actual dates
  const sortedExperiences = experiences?.sort((a, b) => {
    const createdAtA = new Date(a._createdAt);
    const createdAtB = new Date(b._createdAt);
    return createdAtB.getTime() - createdAtA.getTime();
  }) || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative overflow-hidden flex-row max-w-full  mx-auto justify-center text-center "
    >
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <h1 className=" text-sm md:text-3xl lg:text-4xl  section-title text-center uppercase tracking-[16px] ml-5 ">EXPERIENCE</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Experience cards */}
      <div className="w-full h-4/5 md:h-5/6  flex content-center  overflow-x-scroll p-10 space-x-5 snap-x snap-center snap-mandatory scrollbar-thin scrollbar-track-[#2d2c2c] scrollbar-thumb-accent-600/80 mt-28 ">
        {sortedExperiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}