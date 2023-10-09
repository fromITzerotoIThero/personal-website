import React from 'react';
import { useState } from 'react';
import styles from './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import HeroSectionAlternative from './components/HeroSectionAlternative/HeroSectionAlternative';
import ProfileCardsSection from './components/ProfileCardsSection/ProfileCardsSection';
import Footer from './components/Footer/Footer';

function App() {
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // const toggleMobileMenu = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    //     const contentContainer = document.querySelector("#content_container");

    //     if (contentContainer) {
    //         contentContainer.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    //     }
    // };
    

    return (
        <div id="content_container" className={styles.content_container}>
            <HeroSection />
            <HeroSectionAlternative />
            <ProfileCardsSection />
            <Footer />
        </div>
    );
}

export default App;



// import React from 'react';
// import { useState } from 'react';
// import './App.css';
// import HeroSection from './components/HeroSection/HeroSection';
// import ProfileCardsSection from './components/ProfileCardsSection/ProfileCardsSection';
// import Footer from './components/Footer/Footer';

// function App() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    

//     return (
//         <>
//             <HeroSection />
//             <ProfileCardsSection />
//             <Footer />
//         </>
//     );
// }

// export default App;