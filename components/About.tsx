"use client";
import { motion } from "framer-motion";
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
      <p className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </p>
      <div className="space-y-5 md:space-y-10 px-0 md:px-10 md:mt-20">
        <p className="text-xl md:text-3xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-darkGreen/50">little</span>{" "}
          background
        </p>
        <p className="text-sm md:text-lg lg:text-lg text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" -mb-24 -md:mb-3 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl:w-[400px] xl:h-[500px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
      />
    </motion.div>
  );
}
