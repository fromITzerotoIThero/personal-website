import React from 'react';
import styles from './HeroSection.module.css';
import Menu from '../Menu/Menu';

function HeroSection() {
    return (
        <header id="home" className={styles.container}>
            <Menu />
            <h1 className={styles.heading}>Gosia Panek - Junior Front-End Dev</h1>
        </header>
    );
}

export default HeroSection;
