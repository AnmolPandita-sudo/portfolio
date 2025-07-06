"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "Data Scientist & Analyst",
      "Turning Data into Insights",
      "<MachineLearningExpert />",
      "Python • R • SQL • Tableau",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 data-grid-bg opacity-20"></div>
      
      {/* Neural network background */}
      <div className="absolute inset-0 bg-neural-network opacity-30"></div>
      
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
          <div className="absolute inset-0 rounded-full border-2 border-accent-400/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-data-purple/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
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
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold px-10 font-display">
          <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-data-purple bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#3b82f6" />
        </h1>

        {/* Data metrics display */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
          <div className="text-center">
            <div className="metric-display">500+</div>
            <div className="text-neural-400 text-sm font-mono">Projects Analyzed</div>
          </div>
          <div className="text-center">
            <div className="metric-display">1M+</div>
            <div className="text-neural-400 text-sm font-mono">Data Points</div>
          </div>
          <div className="text-center">
            <div className="metric-display">95%</div>
            <div className="text-neural-400 text-sm font-mono">Accuracy Rate</div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="pt-16 -mb-20 space-x-3 flex flex-wrap justify-center gap-3">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contactme">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>

      {/* Floating data elements */}
      <div className="absolute top-1/4 left-10 text-primary-400/30 font-mono text-xs animate-float">
        import pandas as pd
      </div>
      <div className="absolute top-1/3 right-10 text-accent-400/30 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>
        SELECT * FROM insights
      </div>
      <div className="absolute bottom-1/4 left-20 text-data-purple/30 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>
        model.fit(X_train, y_train)
      </div>
    </div>
  );
}