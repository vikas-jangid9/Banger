// src/components/ComicMaker/StoryModal.js
"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../../sections/storySection/story-submit.module.css";

export default function StoryModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);
  
  // Basic form state
  const [formData, setFormData] = useState({ name: '', email: '', story: '' });

  // GSAP Animation for open/close
  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.inOut" });
      gsap.to(boxRef.current, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        ease: "back.out(1.7)", // Bouncy comic pop effect
        delay: 0.1 
      });
    } 
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
    
    // Close modal after submit (optional)
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={onClose}>
      <div 
        className={styles.modalBox} 
        ref={boxRef} 
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside box from closing
      >
        {/* Close X Icon */}
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        
        <h2 className={styles.title}>Submit Your Masterpiece</h2>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="name">Hero Name</label>
            <input 
              type="text" 
              id="name" 
              className={styles.input} 
              placeholder="Captain Flavor..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="email">Secret Contact (Email)</label>
            <input 
              type="email" 
              id="email" 
              className={styles.input} 
              placeholder="you@banger.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="story">The Plot Twist (Under 100 words)</label>
            <textarea 
              id="story" 
              className={styles.textarea} 
              placeholder="Keep it punchy..."
              maxLength={400}
              value={formData.story}
              onChange={(e) => setFormData({...formData, story: e.target.value})}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            BOOM. SEND IT.
          </button>
        </form>
      </div>
    </div>
  );
}