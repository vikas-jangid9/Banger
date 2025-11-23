"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={style.headerBox}>
      <header className={style.header}>
        {/* Logo */}
        <div className={style.logoContainer}>
          <Link href="/" passHref onClick={closeMenu}>
            <Image
              src="/assets/images/logo.webp"
              alt="Company Logo"
              width={100}
              height={40}
              className={style.logoImage}
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className={style.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Navbar */}
        <nav className={`${style.nav} ${isMenuOpen ? style.navOpen : ''}`}>
          {/* Close Button for Mobile */}
          <button
            className={style.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <ul className={style.navbarNav}>
            <li><Link href="#product" className={style.navLink} onClick={closeMenu}>product</Link></li>
            <li><Link href="#know-us" className={style.navLink} onClick={closeMenu}>know us</Link></li>
            <li><Link href="#submit-comic" className={style.navLink} onClick={closeMenu}>submit your comic</Link></li>
            <li><Link href="#contact" className={style.navLink} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;