"use client";

import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import PageLoader from "./PageLoader"; // Your loader component

type Props = { projects: Project[] };

export default function AllProjects({ projects }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const sortedProjects = (projects || []).sort(
    (a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  const handleGoHome = () => {
    setLoading(true);
    startTransition(() => router.push("/"));
  };

  return (
    <>
      {/* Loader */}
      {loading && <PageLoader />}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen relative flex flex-col text-center max-w-full justify-center mx-auto items-center py-20 px-4 md:px-10"
      >
        {/* Background overlays */}
        <div className="absolute inset-0 data-grid-bg opacity-10"></div>
        <div className="absolute inset-0 analytics-gradient opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Page Title */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="section-title mb-6">All Projects</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          </motion.div>

          {/* Project List */}
          <div className="space-y-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ y: 50, opacity: 0, x: -20 }}
                whileInView={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group relative"
              >
                <div className="data-card text-left hover:border-primary-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 mb-5 md:mb-0">
                    {/* Project Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-xl mb-5 md:mb-0">
                        <Image
                          src={urlFor(project?.image).url()}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-primary-500/90 text-white font-mono">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300 mb-3">
                            {project.title}
                          </h4>
                          <p className="text-cyber-300 text-sm md:text-base leading-relaxed">
                            <span className="font-medium text-cyber-200">Project:</span> {project.summary}
                          </p>
                        </div>

                        {/* View Button */}
                        <div className="flex-shrink-0">
                          <Link href={project.linkToBuild} target="_blank" rel="noopener noreferrer">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                            >
                              <ArrowTopRightOnSquareIcon className="w-4 h-4 inline-block mr-1" />
                              View
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Home Button */}
        <button
          onClick={handleGoHome}
          className="fixed bottom-8 right-8 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-5 rounded-full shadow-lg z-50 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </button>
      </motion.div>
    </>
  );
}
