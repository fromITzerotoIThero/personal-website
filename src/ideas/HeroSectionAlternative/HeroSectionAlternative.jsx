import React from 'react';
import styles from './HeroSectionAlternative.module.css';
import Menu from '../../components/Menu/Menu';

function HeroSectionAlternative() {
    return (
        <header className={styles.container}>
            <Menu />
            <h1 className={styles.heading}>Gosia Panek - Junior Front-End Dev</h1>           
        </header>
    );
}

export default HeroSectionAlternative;

