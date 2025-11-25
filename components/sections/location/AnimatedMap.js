import React from 'react';
import styles from './AnimatedMap.module.css';

const AnimatedMap = () => {
    return (
        <div className={styles.mapContainer}>
            <svg viewBox="0 0 400 400" className={styles.mapSvg}>
                <path d="M200,50 Q250,100 300,80 T350,150 T300,250 T200,350 T100,250 T50,150 T100,80 Q150,100 200,50 Z" fill="white" stroke="black" strokeWidth="4" />

                {/* Location Pin */}
                <g transform="translate(180, 180)">
                    <circle cx="20" cy="20" r="10" fill="#EF4444" stroke="black" strokeWidth="2" className={styles.bouncePin} />
                    <text x="40" y="25" className={styles.mapText} fontSize="24">AHMEDABAD</text>
                </g>
                <g transform="translate(240, 120)">
                    <circle cx="10" cy="10" r="6" fill="#EF4444" stroke="black" strokeWidth="2" />
                </g>
                <g transform="translate(120, 220)">
                    <circle cx="10" cy="10" r="6" fill="#EF4444" stroke="black" strokeWidth="2" />
                </g>
            </svg>
        </div>
    );
};

export default AnimatedMap;
