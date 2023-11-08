import React from 'react';
import styles from './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ProfileCardsSection from './components/ProfileCardsSection/ProfileCardsSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {

    return (
        <div id="content_container" className={styles.content_container}>            
            <HeroSection />            
            <ProfileCardsSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
