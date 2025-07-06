"use client";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ChartBarIcon } from "@heroicons/react/24/outline";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="section-title mb-6">Data Projects</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-neural-200 font-light max-w-3xl mx-auto leading-relaxed">
            Transforming complex datasets into{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-semibold">
              actionable insights
            </span>{" "}
            through advanced analytics and machine learning.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="data-card h-full flex flex-col overflow-hidden hover:border-primary-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="aspect-video relative bg-neural-800/50">
                    <Image
                      src={urlFor(project?.image).url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay with project number */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neural-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-500/90 text-white font-mono">
                          PROJECT {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Data visualization icon overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-accent-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent-400/30">
                        <ChartBarIcon className="w-5 h-5 text-accent-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Project Title */}
                  <h4 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                    {project.title}
                  </h4>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.technologies?.slice(0, 4).map((technology) => (
                      <div key={technology._id} className="relative group/tech">
                        <Image
                          src={urlFor(technology?.image).url()}
                          alt={technology.title}
                          width={32}
                          height={32}
                          className="rounded-lg border border-neural-600/50 hover:border-primary-400/50 transition-colors duration-300"
                        />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neural-800 text-neural-200 text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {technology.title}
                        </div>
                      </div>
                    ))}
                    {project?.technologies?.length > 4 && (
                      <div className="w-8 h-8 rounded-lg border border-neural-600/50 bg-neural-800/50 flex items-center justify-center">
                        <span className="text-xs text-neural-400 font-mono">
                          +{project.technologies.length - 4}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className="text-neural-300 text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {project.summary}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Link 
                      href={project.linkToBuild} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 group/btn"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          <span className="text-sm">View Project</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </Link>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 border border-neural-600/50 hover:border-primary-400/50 rounded-xl transition-all duration-300 hover:bg-primary-500/10 group/code"
                    >
                      <CodeBracketIcon className="w-4 h-4 text-neural-400 group-hover/code:text-primary-400 transition-colors duration-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary-500/50 group-hover:to-accent-500/50 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="data-card max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-mono">
                {projects?.length || 0}+
              </div>
              <div className="text-neural-400 text-sm font-mono uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-400 to-data-purple bg-clip-text text-transparent font-mono">
                15+
              </div>
              <div className="text-neural-400 text-sm font-mono uppercase tracking-wider">
                Technologies Used
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-data-purple to-data-orange bg-clip-text text-transparent font-mono">
                100K+
              </div>
              <div className="text-neural-400 text-sm font-mono uppercase tracking-wider">
                Data Points Analyzed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-data-orange to-primary-400 bg-clip-text text-transparent font-mono">
                95%
              </div>
              <div className="text-neural-400 text-sm font-mono uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-neural-900/40 border border-neural-700/50 rounded-2xl backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-data-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-neural-300 font-mono text-sm">
              Ready to collaborate on your next data project?
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}