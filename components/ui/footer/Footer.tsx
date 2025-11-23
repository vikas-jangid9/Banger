import Link from 'next/link';
import styles from './footer.module.css';
import React from 'react';

const InstagramIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.instagramIcon}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerItem}>
                © 2025, BANGER ICE CREAM. ALL RIGHT RESERVED
            </div>
            <div className={`${styles.footerItem} ${styles.social}`}>
                <InstagramIcon /> BANGERICECREAM
            </div>
            <Link href="/privacy-policy" className={styles.footerItem}>
                PRIVACY POLICY
            </Link>
            <Link href="/terms-conditions" className={styles.footerItem}>
                TERMS & CONDITION
            </Link>
            <div className={styles.footerItem}>
                DESIGNED AT [INSERT PLACEHOLDER TEXT FOR BLURRY AREA]
            </div>
        </footer>
    );
}