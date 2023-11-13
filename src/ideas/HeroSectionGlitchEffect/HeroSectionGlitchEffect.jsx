import React from 'react';
import styles from './HeroSectionGlitchEffect.module.css';
import Menu from '../../components/Menu/Menu';

function HeroSectionGlitchEffect() {
    return (
        <header className={styles.container}>
            <Menu />
            <h1 className={styles.heading}>Gosia Panek - Junior Front-End Dev</h1>
            <div className={styles.underlay_glitch_effect}></div>
        </header>
    );
}

export default HeroSectionGlitchEffect;