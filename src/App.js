import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ProfileCardsSection from './components/ProfileCardsSection/ProfileCardsSection';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <HeroSection />
            <ProfileCardsSection />
            <Footer />
        </>
    );
}

export default App;