"use client";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import Image from "next/image";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex flex-col rounded-t-full items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:[700px] 2xl:[1000px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-28 h-28 rounded-full  object-cover object-center "
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="w-full px-5 text-center">
        <h4 className="text-xl font-light ">{experience?.jobTitle}</h4>
        <p className="font-bold text-base mt-1 ">{experience?.company}</p>
        <div className="flex space-x-2 my-2 justify-center">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              className=" rounded-full object-cover w-6 h-6"
              src={urlFor(technology?.image).url()}
              alt=""
              height={10}
              width={10}
            />
          ))}

          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-0 md:w-0  rounded-full mb-0 object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        <p className="uppercase py-0 text-gray-500 text-xs -mb-4 ">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <ol className=" px-0 md:px-10 font-mono list-disc space-y-3 text-xs md:text-sm overflow-y-scroll scrollbar-thin scrollbar-track-[#292929] scrollbar-thumb-slate-500">
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ol>
    </article>
  );
}
