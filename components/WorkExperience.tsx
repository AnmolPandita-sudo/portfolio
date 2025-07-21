"use client";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import { useState, useEffect, useRef } from "react";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sort experiences by addition order (most recently added first)
  // This ensures newly added experiences always appear at the top, regardless of their actual dates
  const sortedExperiences = experiences?.sort((a, b) => {
    const createdAtA = new Date(a._createdAt);
    const createdAtB = new Date(b._createdAt);
    return createdAtB.getTime() - createdAtA.getTime();
  }) || [];

  // Handle scroll position and arrow visibility
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update current index based on scroll position
      const cardWidth = 420; // Approximate card width including margin
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, sortedExperiences.length - 1));
    }
  };

  // Scroll to specific experience
  const scrollToExperience = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 420;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Arrow navigation
  const scrollLeft = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToExperience(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(currentIndex + 1, sortedExperiences.length - 1);
    scrollToExperience(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-row max-w-full mx-auto justify-center text-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid-bg opacity-10"></div>
      <div className="absolute inset-0 analytics-gradient opacity-20"></div>

      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <h1 className="text-sm md:text-3xl lg:text-4xl section-title text-center uppercase tracking-[16px] ml-5">EXPERIENCE</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Swipe Container */}
      <div className="swipe-container w-full h-4/5 md:h-5/6 mt-28 relative">
        {/* Gradient Fade Indicators */}
        <div className={`swipe-fade-left ${showLeftArrow ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`swipe-fade-right ${showRightArrow ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Navigation Arrows */}
        {showLeftArrow && (
          <button 
            onClick={scrollLeft}
            className="swipe-arrow swipe-arrow-left"
            aria-label="Previous experience"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {showRightArrow && (
          <button 
            onClick={scrollRight}
            className="swipe-arrow swipe-arrow-right"
            aria-label="Next experience"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Experience Cards */}
        <div 
          ref={scrollContainerRef}
          className="swipe-wrapper h-full p-10 space-x-5"
        >
          {sortedExperiences.map((experience, index) => (
            <div key={experience._id} className="swipe-card">
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        {sortedExperiences.length > 1 && (
          <div className="swipe-dots">
            {sortedExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToExperience(index)}
                className={`swipe-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Swipe Instruction */}
        {sortedExperiences.length > 1 && (
          <div className="swipe-instruction">
            Swipe to explore experiences
          </div>
        )}
      </div>
    </motion.div>
  );
}