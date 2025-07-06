"use client";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  // Group skills by category based on common patterns
  const groupSkills = (skills: SkillType[]) => {
    const frontend = skills.filter(skill => 
      ['react', 'javascript', 'typescript', 'html', 'css', 'tailwind', 'next', 'vue', 'angular'].some(tech => 
        skill.title.toLowerCase().includes(tech)
      )
    );
    
    const backend = skills.filter(skill => 
      ['node', 'python', 'java', 'php', 'express', 'django', 'spring', 'laravel'].some(tech => 
        skill.title.toLowerCase().includes(tech)
      )
    );
    
    const database = skills.filter(skill => 
      ['mongodb', 'mysql', 'postgresql', 'firebase', 'sql', 'redis'].some(tech => 
        skill.title.toLowerCase().includes(tech)
      )
    );
    
    const tools = skills.filter(skill => 
      ['git', 'docker', 'aws', 'figma', 'photoshop', 'vscode'].some(tech => 
        skill.title.toLowerCase().includes(tech)
      )
    );

    // Remaining skills that don't fit into above categories
    const other = skills.filter(skill => 
      ![...frontend, ...backend, ...database, ...tools].includes(skill)
    );

    return { frontend, backend, database, tools, other };
  };

  const skillGroups = groupSkills(skills);

  const SkillGroup = ({ title, skills, delay = 0 }: { title: string; skills: SkillType[]; delay?: number }) => {
    if (skills.length === 0) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="mb-8"
      >
        <h4 className="text-lg font-semibold text-darkGreen mb-4 uppercase tracking-wider">
          {title}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <motion.div
              key={skill._id}
              whileHover={{ scale: 1.05 }}
              className="group bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={skill.image ? `https://cdn.sanity.io/images/wbra8tq2/production/${skill.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}` : '/placeholder-skill.png'}
                    alt={skill.title}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="absolute -top-1 -right-1 bg-darkGreen text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {skill.progress}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {skill.title}
                  </p>
                  <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-darkGreen h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left max-w-7xl mx-auto px-6 py-20"
    >
      <div className="text-center mb-16">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-3xl mb-4">
          Skills
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          • Proficiency levels shown as percentages
          • Hover over cards for enhanced view
          • Organized by technology stack
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <SkillGroup title="Frontend Development" skills={skillGroups.frontend} delay={0.1} />
          <SkillGroup title="Backend Development" skills={skillGroups.backend} delay={0.3} />
        </div>
        <div>
          <SkillGroup title="Database & Storage" skills={skillGroups.database} delay={0.2} />
          <SkillGroup title="Tools & Technologies" skills={skillGroups.tools} delay={0.4} />
          <SkillGroup title="Other Skills" skills={skillGroups.other} delay={0.5} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center space-x-4 bg-gray-800/30 rounded-full px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-300">Expert (80%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-300">Proficient (60-79%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-300">Learning (40-59%)</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}