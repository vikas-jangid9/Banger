import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.css';

const Header: React.FC = () => {
  return (
    <div className={style.headerBox}>
      <header className={style.header}>
        {/* Logo */}
        <div className={style.logoContainer}>
          <Link href="/" passHref>
            <Image
              src="/assets/images/logo.png"
              alt="Company Logo"
              width={100}
              height={40}
              className={style.logoImage} // Applied a class for potential image-specific styling
            />
          </Link>
        </div>

        {/* Navbar */}
        <nav>
          <ul className={style.navbarNav}>
            <li><Link href="#" className={style.navLink}>product</Link></li>
            <li><Link href="#" className={style.navLink}>konw us</Link></li>
            <li><Link href="#" className={style.navLink}>submit your comic</Link></li>
            <li><Link href="#" className={style.navLink}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;