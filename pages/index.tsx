import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  // Handle smooth scrolling to sections without hash URLs
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Clean the URL by removing any hash
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  // Handle initial hash navigation on page load (if someone bookmarks a hash URL)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const sectionId = hash.substring(1); // Remove the # symbol
        scrollToSection(sectionId);
      }, 100);
    }
  }, []);

  const handleScrollToTop = () => {
    scrollToSection('hero');
  };
  
  return (
    <div className="bg-gradient-to-br from-cyber-900 via-cyber-800 to-cyber-900 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-custom">
      <Head>
        <title>IT Audit & Data Science | Portfolio</title>
        <meta
          name="description"
          content="Aspiring IT Auditor with hands-on experience in data analysis, machine learning, data science, and exposure to full-stack development. Exploring secure, data-driven solutions and risk intelligence."
        />
        <meta
          name="keywords"
          content="IT audit, cybersecurity, data analysis, machine learning, risk assessment, compliance, security audit, penetration testing basics, data science, full-stack development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Header */}
      <Header socials={socials} scrollToSection={scrollToSection} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} scrollToSection={scrollToSection} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>

      {/* Scroll to top button */}
      <footer className="sticky bottom-16 md:bottom-4 w-full cursor-pointer z-50">
        <div className="fixed bottom-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 backdrop-blur-sm border border-primary-400/30"
          >
            <BsFillArrowUpCircleFill className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </motion.button>
        </div>
      </footer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};