"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../../sections/knowUs/know-us.module.css";

export default function KnowUsModal({ data, isOpen, onClose }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      // Animate Overlay
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      // Animate Modal (Pop effect)
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: "back.out(1.7)" // The bouncy comic effect
        }
      );
    }
  }, [isOpen]); // Re-run when isOpen changes

  if (!isOpen || !data) return null;

  return (
    <div 
      className={styles.modalOverlay} 
      ref={overlayRef} 
      onClick={onClose} // Close when clicking background
    >
      <div 
        className={styles.modalContent} 
        ref={modalRef} 
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
      >
        <button className={styles.closeButton} onClick={onClose}>X</button>
        
        <div className={styles.modalLeft}>
          <h2 className={styles.modalTitle}>{data.title}</h2>
          <p className={styles.modalText}>{data.description}</p>
        </div>

        <div className={styles.modalRight}>
          {/* Placeholder image logic - using a fun ice cream image */}
          <img 
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop" 
            alt="Ice Cream Vibe" 
          />
        </div>
      </div>
    </div>
  );
}