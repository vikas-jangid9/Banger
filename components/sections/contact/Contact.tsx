// src/components/ContactSection/ContactSection.js
"use client";

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    city: '',
    enquiryType: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '' });

    try {
      // API Call to your backend (Create this route in pages/api/contact.js or app/api/contact/route.js)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, message: "BOOM! WE'LL BE IN TOUCH." });
        // Reset form
        setFormData({
          name: '', businessName: '', city: '', enquiryType: '', email: '', phone: '', message: ''
        });
      } else {
        setStatus({ loading: false, message: "UH OH. SOMETHING BROKE." });
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus({ loading: false, message: "ERROR SENDING MESSAGE." });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.halftoneOverlay}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>LET'S MAKE IT A BANGER DEAL</h2>
        <p className={styles.subText}>
          STOCK US. SCOOP US. PARTNER WITH US. WHETHER YOU WANT TO BRING BANGER TO YOUR CAFÉ, 
          EVENT, HOTEL, CAMPUS OR OFFICE - THIS IS WHERE THE MAGIC BEGINS.
          <br /><br />
          FILL OUT THE FORM BELOW AND WE'LL GET BACK FASTER THAN A CONE MELTS IN MAY.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          
          {/* Row 1 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>NAME</label>
            <input 
              type="text" 
              name="name" 
              className={styles.input} 
              required 
              value={formData.name} 
              onChange={handleChange}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>BUSINESS / COMPANY NAME</label>
            <input 
              type="text" 
              name="businessName" 
              className={styles.input} 
              value={formData.businessName} 
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>CITY + LOCATION</label>
            <input 
              type="text" 
              name="city" 
              className={styles.input} 
              required 
              value={formData.city} 
              onChange={handleChange}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>TYPE OF ENQUIRY</label>
            <input 
              type="text" 
              name="enquiryType" 
              className={styles.input} 
              placeholder="Franchise, Event, etc."
              value={formData.enquiryType} 
              onChange={handleChange}
            />
          </div>

          {/* Row 3 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              name="email" 
              className={styles.input} 
              required 
              value={formData.email} 
              onChange={handleChange}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>PHONE NUMBER</label>
            <input 
              type="tel" 
              name="phone" 
              className={styles.input} 
              required 
              value={formData.phone} 
              onChange={handleChange}
            />
          </div>

          {/* Full Width Textarea */}
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>TELL US MORE</label>
            <textarea 
              name="message" 
              className={styles.textarea} 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitBtn} disabled={status.loading}>
              {status.loading ? "SENDING..." : "GET IN TOUCH"}
            </button>
          </div>
          
          {/* Status Message */}
          {status.message && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-comic)' }}>
              {status.message}
            </div>
          )}

        </form>
      </div>
    </section>
  );
}