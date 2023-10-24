import React from 'react';
import styles from './HeroSectionFixIt.module.css';
import MenuTweaked from '../MenuTweaked/MenuTweaked';

function HeroSectionFixIt() {
    return (
        <header className={styles.container}>
            <MenuTweaked />
            <h1 className={styles.heading}>Gosia Panek - Junior Front-End Dev</h1>
        </header>
    );
}

export default HeroSectionFixIt;