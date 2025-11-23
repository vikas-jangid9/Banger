// src/components/Locations/Locations.js
import React from 'react';
import styles from './location.module.css';

export default function Locations() {
  return (
    <section className={styles.section}>
      
      {/* 1. Top Left Content */}
      <div className={styles.topContent}>
        <h2 className={styles.heading}>NEED A BANGER</h2>
        <p className={styles.subText}>
          WE DON'T JUST DROP FLAVOURS, WE DROP LOCATIONS. OUR CARTS ARE ALWAYS ON THE MOVE, SPREADING CHILL AND CAUSING SNACK-FUELLED CHAOS ACROSS THE CITY.
        </p>
      </div>

      {/* 2. The Map Label (Positioned absolutely over the background image) */}
      <div className={styles.mapLabel}>
        AHMEDABAD
      </div>

      {/* 3. The Bottom Stats Box */}
      <div className={styles.statsBox}>
        {/* Left side text */}
        <p className={styles.statsDescription}>
          FROM ONE SCOOP TO EVERY CITY, BANGER IS EXPANDING AT THE SPEED OF MILK CHURNING.
        </p>

        {/* Right side counters */}
        <div className={styles.statsCounters}>
          <div className={styles.counterItem}>
            <span className={styles.counterNumber}>30+</span>
            CARTS
          </div>
          <div className={styles.counterItem}>
            <span className={styles.counterNumber}>100+</span>
            LOCATIONS
          </div>
        </div>
      </div>

    </section>
  );
}