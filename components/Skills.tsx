"use client";

import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  const getSkillColor = (progress: number) => {
    if (progress >= 90) return "from-primary-400 to-primary-600";
    if (progress >= 80) return "from-accent-400 to-accent-600";
    if (progress >= 70) return "from-security-green to-green-600";
    if (progress >= 60) return "from-security-cyan to-cyan-600";
    return "from-cyber-400 to-cyber-600";
  };

  const getSkillLevel = (progress: number) => {
    if (progress >= 90) return "Expert";
    if (progress >= 80) return "Advanced";
    if (progress >= 70) return "Proficient";
    if (progress >= 60) return "Intermediate";
    return "Learning";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center max-w-[2000px] mx-auto items-center justify-center px-6 md:px-10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 analytics-gradient opacity-20" />
      <div className="absolute inset-0 data-grid-bg opacity-10" />

      <div className="relative z-10 w-full">
        <div className="text-center mb-5">
          <h3 className="section-title mb-4">Skills & Technologies</h3>
          <div className="w-48 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-cyber-100 text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
            Hover over skills to see proficiency levels
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 md:gap-6 lg:gap-8 place-items-center">
            {skills?.map((skill, index) => (
              <motion.div
                key={skill._id}
                initial={{
                  scale: 0,
                  opacity: 0,
                  rotateY: 180,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  rotateY: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                <div className="relative">
                  {/* Skill icon with security glow */}
                  <div className="relative security-glow">
                    <motion.img
                      whileHover={{ scale: 1.1, rotateY: 15 }}
                      className="rounded-2xl border-2 border-cyber-600/50 object-cover w-10 h-10 xl:w-20 xl:h-20 filter group-hover:brightness-110 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-xl"
                      src={
                        skill.image
                          ? urlFor(skill.image).width(128).url()
                          : "/fallback.png"
                      }
                      alt={skill.title}
                      loading="lazy"
                    />

                    {/* Hover overlay with progress and level only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyber-900/90 to-cyber-800/90 backdrop-blur-sm flex flex-col items-center justify-center border-2 border-primary-500/50 px-2 text-center ">
                        <div
                          className={`text-lg md:text-xl lg:text-2xl font-bold  md:mt-0 xl:mt-0 lg:mt-0 mt-5 bg-gradient-to-r ${getSkillColor(
                            skill.progress
                          )} bg-clip-text text-transparent font-mono`}
                        >
                          {skill.progress}%
                        </div>
                        <div className="text-xs text-primary-300 font-medium  md:mt-0 xl:mt-0 lg:mt-0 mt-1">
                          {getSkillLevel(skill.progress)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Always-visible title below the image */}
                <div className="mt-3 text-center">
                  <p className="text-base sm:text-sm md:text-base text-cyber-200 font-medium leading-tight font-mono group-hover:text-primary-300 transition-colors duration-300">
                    {skill.title}
                  </p>
                </div>

                {/* Floating particles effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary-400 rounded-full"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${30 + i * 15}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
