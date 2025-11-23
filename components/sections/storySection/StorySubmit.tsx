// src/components/ComicMaker/ComicMaker.js
"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./story-submit.module.css";
import StoryModal from "../../ui/model/StoryModel";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function StorySubmit() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Clear refs on unmount to prevent issues with stale elements
  useEffect(() => {
    return () => {
      panelsRef.current = [];
    };
  }, []);

  useGSAP(() => {
    // Reset any previous transforms before applying new ones to ensure consistent starting state
    gsap.set(panelsRef.current, { clearProps: "transform" });

    // Apply slight random rotation and translation for the "comic strip" effect
    panelsRef.current.forEach((panel, index) => {
      gsap.set(panel, {
        x: gsap.utils.random(-5, 5), // Small horizontal shift
        y: gsap.utils.random(-10, 10), // Small vertical shift, centered around 0
        rotation: gsap.utils.random(-3, 3), // Small rotation
      });
    });

    // Animate the panels into view
    gsap.from(panelsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: "+=100", // Animate from 100px below their final (randomized) y position
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.5)",
    });
  }, { scope: containerRef });

  const addToRefs = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <section className={styles.section} ref={containerRef}>
      {/* 1. The Comic Image Strip */}
      <div className={styles.stripContainer}>
        {/* Using placeholders. Replace src with your actual comic assets */}
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={styles.panel} ref={addToRefs}>
            <img 
              src={`https://placehold.co/400x600/orange/white?text=Comic+Panel+${num}`} 
              alt={`Comic Panel ${num}`} 
            />
          </div>
        ))}
      </div>

      {/* 2. Main Text */}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Make Your Own Comic Strip</h2>
        <p className={styles.description}>
          Ever looked at your ice cream and thought, “This deserves a plot twist”? Well, now it can have one.
          We’ve made <em>comic strips for every banger flavour.</em> Now it’s your turn—rewrite the story,
          twist the ending, add drama (yes, even aliens).
        </p>
        <p className={styles.description} style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          Each week we feature one on our socials. The winner? Banger-famous.
        </p>
      </div>

      {/* 3. Instructions Box */}
      <div className={styles.guidelinesBox}>
        <div className={styles.column}>
          <h3>Instructions:</h3>
          <ul>
            <li>Pick your flavour.</li>
            <li>Read the existing 4-panel comic.</li>
            <li>Rewrite it your way: Wild, Weird, Romantic, Rebellious, Whatever.</li>
            <li>Keep it under 100 words. We like short scoops.</li>
            <li>Submit it right here. Boom, you're done.</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>The Boring-But-Important Guidelines:</h3>
          <ul>
            <li>Keep it fun, not filthy. No abuse, hate, or NSFW stuff.</li>
            <li>This is a chill space, leave the trolling for your burner account.</li>
            <li>If it makes us laugh, cry or go "Whoa," you might just win.</li>
            <li>We might edit your story a little, but the vibe will stay yours.</li>
            <li>Submitting = Giving us the right to post your brilliance (with credit, of course).</li>
          </ul>
        </div>
      </div>

      {/* 4. Submit Button */}
      <div className={styles.ctaWrapper}>
        <button 
            className={styles.mainSubmitBtn}
            onClick={() => setIsModalOpen(true)}
        >
            Submit Your Story
        </button>
        </div>
        <StoryModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        />
    </section>
  );
}