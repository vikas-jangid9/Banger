"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./hero.module.css";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);
  const boltRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const heroMainRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.5 }); // Added a 0.5s delay to the entire timeline

    // Make content visible before animation starts
    gsap.set(contentRef.current, { visibility: "visible" });
    // Initial state for heroMain to come from bottom
    gsap.set(heroMainRef.current, { y: "100%", opacity: 0 });

    tl.fromTo(
      boltRef.current,
      { x: "-100%", skewX: 20 },
      {
        x: "0%",
        skewX: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)", // Very bouncy entrance
        onComplete: () => {
          // Continuous floating animation for the bolt
          gsap.to(boltRef.current, {
            y: "-=20", // Float up 20px
            rotation: 2, // Slight rotation
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        }
      }
    )
      .to(
        heroMainRef.current,
        {
          y: "0%",
          opacity: 1,
          duration: 1.0,
          ease: "power3.out", // Banger hero comes from down
        },
        "<" // Start this animation at the same time as the bolt animation
      )
      .fromTo(
        [titleRef.current, subRef.current],
        { x: 100, opacity: 0, skewX: -10 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8" // Start slightly before bolt finishes
      )
      .fromTo(
        btnRef.current,
        { scale: 0, rotation: -15 },
        {
          scale: 1,
          rotation: -1, // Match final CSS rotation
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.4"
      );

    // Mouse-follow effect for the boltRef
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = (mouseX - centerX) * 0.02; // Adjust multiplier for sensitivity
      const moveY = (mouseY - centerY) * 0.02; // Adjust multiplier for sensitivity

      gsap.to(boltRef.current, {
        x: moveX,
        // y: moveY, // Removed y to avoid conflict with floating animation
        duration: 0.5,
        ease: "power1.out",
        overwrite: "auto" // Ensure it doesn't kill the float if we were animating different props, but here we are being careful.
      });
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };

  }, { scope: containerRef });


  return (
    <section className={styles.section} ref={containerRef}>
      {/* Halftone Pattern Background */}
      <div className={styles.halftoneOverlay}></div>

      <div className={styles.boltContainer}>
        <Image
          src='/assets/images/hero-banner-bg.png'
          alt='Lighting Bolt'
          width={1920}
          height={1080}
          layout="responsive"
          className={styles.heroBg}
          ref={boltRef} // Assign boltRef to the background image
        />

        <Image
          src='/assets/images/hero-main-image.png'
          alt='Hero'
          width={1920}
          height={1080}
          layout="responsive"
          className={styles.heroMain}
        />
      </div>

      {/* Text Content */}
      <div className={styles.content} ref={contentRef}>
        <h1 className={styles.mainTitle} ref={titleRef}>
          FUEL YOUR <br /> INNER HERO
        </h1>
        <h2 className={styles.subTitle} ref={subRef}>
          <span>WITH</span> BRAINFREEZE <br /> <span>AND</span> SUGARBAE
        </h2>
        <button className={styles.ctaButton} ref={btnRef}>
          VIEW BANGERZ
        </button>
      </div>
    </section>
  );
}
