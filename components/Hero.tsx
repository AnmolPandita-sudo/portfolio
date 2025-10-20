"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = { 
  pageInfo: PageInfo;
  scrollToSection: (sectionId: string) => void;
};

export default function Hero({ pageInfo, scrollToSection }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "Aspiring IT Auditor",
      "Data Science & Machine Learning Enthusiast",
      "Transforming Data into Intelligence",
      "Risk • Analytics • Secure Systems",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 30,
    typeSpeed: 60,
  });
  

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 data-grid-bg opacity-20"></div>

      {/* Security grid background */}
      <div className="absolute inset-0 bg-security-grid opacity-30"></div>
      <div className="absolute inset-0 bg-lock-pattern opacity-40"></div>
      
      <BackgroundCircles />

      {/* Profile image with data visualization glow */}
      <div className="relative z-20">
        <div className="relative">
          <Image
            className="rounded-full mx-auto object-cover border-4 border-primary-500/50 shadow-2xl shadow-primary-500/25"
            src={urlFor(pageInfo?.heroImage).url()}
            alt="Profile"
            width={180}
            height={180}
          />
          {/* Animated ring around profile */}
          <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-security-green/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="z-20 space-y-6">
        {/* Role badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 backdrop-blur-sm">
          <span className="text-sm font-mono text-primary-300 tracking-wider uppercase">
            {pageInfo?.role}
          </span>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold px-10 font-display">
          <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-primary-400 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#22c55e" />
        </h1>

        {/* Security metrics display */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
          <div className="text-center">
            <div className="metric-display">5+</div>
            <div className="text-cyber-400 text-sm font-mono">Data Science Projects</div>
          </div>
          <div className="text-center">
            <div className="metric-display">8+</div>
            <div className="text-cyber-400 text-sm font-mono">Machine Learning Models</div>
          </div>
          <div className="text-center">
            <div className="metric-display">10+</div>
            <div className="text-cyber-400 text-sm font-mono">Full Stack Applications Built</div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="pt-10 md:text-lg text-sm -mb-20 space-x-3 flex flex-wrap justify-center gap-3">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
            <button className="heroButton">About</button>
          </a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contactme" onClick={(e) => handleNavClick(e, 'contactme')}>
            <button className="heroButton">Contact</button>
          </a>
        </div>
      </div>

      {/* Floating security elements */}
      <div className="absolute top-1/4 left-10 text-primary-400/30 font-mono text-xs animate-float">
        nmap -sV -sC target
      </div>
      <div className="absolute top-1/3 right-10 text-accent-400/30 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>
        ISO 27001 Compliance
      </div>
      <div className="absolute bottom-1/4 left-20 text-primary-400/30 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>
        Risk Assessment: HIGH
      </div>
    </div>
  );
}