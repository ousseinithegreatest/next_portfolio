/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1>Ousseini Adamou</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </nav>
        <div className={styles.presentation}>
          <div className={styles.about}>
            <h2>Hi, i'm Ousseini</h2>
            <p>A SOFTWARE ENGINEER BASED IN DAKAR 🇸🇳</p>
            <span>DEVELOPMENT - </span> 
            <span>DESIGN</span>
          </div>
          <Image src="/skill.gif" alt="Skill" width={640} height={640} />
        </div>
      </header>
    </>
  );
}
