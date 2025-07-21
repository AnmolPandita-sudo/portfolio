"use client";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ChartBarIcon } from "@heroicons/react/24/outline";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  // Sort projects by addition order (most recently added first)
  // This ensures newly added projects always appear at the top, regardless of their actual dates
  const sortedProjects = projects?.sort((a, b) => {
    const dateA = new Date(a._createdAt);
    const dateB = new Date(b._createdAt);
    return dateB.getTime() - dateA.getTime();
  }) || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center max-w-full justify-center mx-auto items-center py-20 px-4 md:px-10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid-bg opacity-10"></div>
      <div className="absolute inset-0 analytics-gradient opacity-20"></div>
      
      {/* Floating Data Elements */}
      <div className="absolute top-20 left-10 text-primary-400/20 font-mono text-sm animate-float">
        {"{ projects: 'showcase' }"}
      </div>
      <div className="absolute top-32 right-20 text-accent-400/20 font-mono text-sm animate-float" style={{ animationDelay: '1s' }}>
        df.head()
      </div>
      <div className="absolute bottom-32 left-20 text-data-purple/20 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
        plt.figure(figsize=(12,8))
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0 }}
          className="text-center mb-16"
        >
          <h3 className="section-title mb-6">Data Projects</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Projects List - Single Row Format */}
        <div className="space-y-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ y: 50, opacity: 0, x: -20 }}
              whileInView={{ y: 0, opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative"
            >
              <div className="data-card text-left hover:border-primary-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
                <div className="flex items-start space-x-6">
                  {/* Project Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-xl">
                      <Image
                        src={urlFor(project?.image).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Project number overlay */}
                      <div className="absolute top-2 left-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-primary-500/90 text-white font-mono">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Data visualization icon */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-6 h-6 bg-accent-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent-400/30">
                          <ChartBarIcon className="w-3 h-3 text-accent-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content - Single Row Format */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* Main Project Information */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          {/* Project Title */}
                          <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                            {project.title}
                          </h4>

                          {/* Technologies - Inline */}
                          <div className="flex items-center space-x-2">
                            <span className="text-neural-400 text-sm font-mono">using</span>
                            <div className="flex space-x-1">
                              {project?.technologies?.slice(0, 4).map((technology) => (
                                <div key={technology._id} className="relative group/tech">
                                  <Image
                                    src={urlFor(technology?.image).url()}
                                    alt={technology.title}
                                    width={20}
                                    height={20}
                                    className="rounded border border-neural-600/50 hover:border-primary-400/50 transition-colors duration-300"
                                  />
                                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neural-800 text-neural-200 text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                                    {technology.title}
                                  </div>
                                </div>
                              ))}
                              {project?.technologies?.length > 4 && (
                                <div className="w-5 h-5 rounded border border-neural-600/50 bg-neural-800/50 flex items-center justify-center">
                                  <span className="text-xs text-neural-400 font-mono">
                                    +{project.technologies.length - 4}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Project Description - Single Row */}
                        <p className="text-neural-300 text-sm md:text-base leading-relaxed">
                          <span className="font-medium text-neural-200">Project:</span> {project.summary}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="flex-shrink-0">
                        <Link 
                          href={project.linkToBuild} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 group/btn"
                          >
                            <span className="relative z-10 flex items-center space-x-2">
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              <span className="text-sm">View</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary-500/50 group-hover:to-accent-500/50 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-neural-900/40 border border-neural-700/50 rounded-2xl backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-data-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-neural-300 font-mono text-sm">
              {sortedProjects.length} data projects • Transforming insights into impact
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}