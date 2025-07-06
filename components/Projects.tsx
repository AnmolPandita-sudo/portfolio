"use client";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import Link from "next/link";
import Image from "next/image";
import { MdSwipe } from "react-icons/md";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0  "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative md:top-4 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-600/80 md:mb-0 mb-14">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className=" h-40 object-contain rounded-xl"
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center">
                <span className="">Project {i + 1}:</span>{" "}
                <Link href={project.linkToBuild} className="">
                  {project?.title}
                  <span className="uppercase tracking-wide font-semibold border-y-2 text-xs ml-5 text">
                    Take me to Build
                  </span>
                </Link>
              </h4>
              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="rounded-full object-cover"
                    src={urlFor(technology?.image).url()}
                    alt=""
                    height={40}
                    width={40}
                  />
                ))}
              </div>

              <p className="text-base text-justify w-full md:w-[900px]">
                {project?.summary}
              </p>
              <a className=" justify-center flex flex-row">
                <MdSwipe className=" h-10 w-10 -mb-20" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[15%] md:top-[28%] bg-[#F7AB0A]/20 h-[75%] md:h-96 md:-skew-y-12 rounded-full md:rounded-none "></div>
    </motion.div>
  );
}