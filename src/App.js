import React from 'react';
import styles from './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ProfileCardsSection from './components/ProfileCardsSection/ProfileCardsSection';
import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider';
import Footer from './components/Footer/Footer';

function App() {

    return (
        <div id="content_container" className={styles.content_container}>
            <HeroSection />
            <ProfileCardsSection />
            <PortfolioSlider />
            <Footer />
        </div>
    );
}

export default App;
