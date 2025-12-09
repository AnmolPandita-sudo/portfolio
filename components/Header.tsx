"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
  scrollToSection: (sectionId: string) => void;
};

export default function Header({ socials, scrollToSection }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-900/80 border-b border-neutral-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between md:justify-evenly relative">
            {/* Logo/Brand */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center gap-4">
              {/* Icon with glow */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-mono">BA</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-400 to-accent-400 blur-lg opacity-30 -z-10" />
              </div>

              {/* Role Info */}
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
                  Business Analyst
                </h1>
                <p className="text-xs text-neutral-400 font-mono">Analytics • ML • Insights</p>
              </div>
            </div>

            </motion.div>
            <div></div>
            <div></div>
            {/* Center Social Icons (Laptop only) */}
            <div className="flex items-center justify-evenly md:justify-evenly relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute hidden md:flex items-center space-x-2"
            >
              {socials.slice(0, 10).map((social) => (
                <a
                  key={social._id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  title={social.title}
                >
                  <SocialIcon
                    url={social.url}
                    fgColor="#94a3b8"
                    bgColor="transparent"
                    style={{ height: 50, width: 50 }}
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none" />
                </a>
              ))}
            </motion.div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2"></div>
            <div className="hidden md:flex items-center space-x-2"></div>

            {/* Right side: Contact Button + Hamburger */}
            <div className="flex items-center space-x-4">
              <a onClick={(e) => handleNavClick(e, "contactme")}>
                <motion.button
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex relative overflow-hidden px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 group"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="hidden sm:inline">Get in Touch</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </a>

              {/* Hamburger menu */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="sm:hidden p-2 text-neutral-300 hover:text-primary-300 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent animate-data-stream" />
        </div>

        {/* Sidebar (Mobile only) */}
        <AnimatePresence>
          {(menuOpen || isClosing) && (
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-auto bg-neutral-900 z-50 p-6 shadow-lg border-l border-neutral-700 sm:hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-white">Connect</h2>
                <button
                  onClick={() => {
                    setIsClosing(true);
                    setTimeout(() => {
                      setMenuOpen(false);
                      setIsClosing(false);
                    }, 400);
                  }}
                  className="text-gray-400 hover:text-white text-2xl transition duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {socials.map((social) => (
                  <a
                    key={social._id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <SocialIcon
                      url={social.url}
                      fgColor="gray"
                      bgColor="transparent"
                      style={{ height: 35, width: 35 }}
                      className="hover:opacity-80 transition-opacity duration-300"
                    />
                    <span className="text-sm text-gray-300">{social.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
