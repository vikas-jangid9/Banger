// components/IceCreamCard.js
import React from 'react';
import Image from 'next/image';
import styles from './ice-cream-card.module.css';

const IceCreamCard = ({ flavorName, imageSrc, statText, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.comicPanel}>
        {/* Title Panel */}
        <div className={styles.titlePanel}>
          <h2 className={styles.title}>{flavorName}</h2>
        </div>

        {/* Image Panel with Sunburst Background */}
        <div className={styles.imagePanel}>
          <Image
            src={imageSrc}
            alt={`${flavorName} Ice Cream`}
            width={220} // Adjust width/height based on your actual image assets
            height={220}
            className={styles.image}
            priority // Optional: load this image quickly if it's above the fold
          />
        </div>

        {/* Stats Panel */}
        <div className={styles.statsPanel}>
          <h3 className={styles.statText}>{statText}</h3>
        </div>

        {/* Description Panel */}
        <div className={styles.descriptionPanel}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IceCreamCard;