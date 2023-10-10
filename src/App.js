import React from 'react';
import styles from './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ProfileCardsSection from './components/ProfileCardsSection/ProfileCardsSection';
import Footer from './components/Footer/Footer';

function App() {

    return (
        <div id="content_container" className={styles.content_container}>
            <HeroSection />
            <ProfileCardsSection />
            <Footer />
        </div>
    );
}

export default App;
