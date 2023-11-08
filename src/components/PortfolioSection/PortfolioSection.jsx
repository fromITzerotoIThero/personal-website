import React from 'react';
import styles from './PortfolioSection.module.css';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';

function PortfolioSection() {
    return (
        <section className={styles.container}>            
            <div id="portfolio" className={styles.navigation_trick_element}></div>
            <h1 className={styles.heading}>Portfolio</h1>
            <PortfolioSlider />            
        </section>
    );
}

export default PortfolioSection;