import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './IBOSPage.module.css';
import { IBOSScreensDiagonalMockup, rubberDuckImage } from '../../assets/images/images';
import { GitHubLogoCustom } from '../../assets/logos/logos';
import { WebsiteIcon } from '../../assets/icons/icons';
import ContactPill from '../../components/ContactPill/ContactPill';
import IBOSSlider from './IBOSSlider/IBOSSlider';

function IBOSPage() {
    // const isMobile = !useMediaQuery({ minWidth: '768px' });
    // const imageSrc = isMobile ? IBOSScreensDiagonalMockup : rubberDuckImage;

    return (
        <>
            <div className={styles.container}>                
                <h1 className={styles.heading}>IBOS</h1>
                <div className={styles.pill_container}>
                    <ContactPill
                        href="https://ibos.netlify.app/"
                        ariaLabel="IBOS mock shop app"
                        iconComponent={<WebsiteIcon />}
                        contactInformation="app"
                    />
                    <ContactPill
                        href="https://github.com/fromITzerotoIThero/IBOS"
                        ariaLabel="IBOS Project GitHub Repository"
                        iconComponent={<GitHubLogoCustom />}
                        contactInformation="repository"
                    />
                </div>
                <div className={styles.text_container}>
                    <p>
                        I Build On Strenghts is a mock online shop selling conference freebies inspired by Gallup StrengthsFinder Themes.
                    </p>
                    <p>
                        This project is my training field for learning React.js.
                    </p>
                    <p>
                        <ul className={styles.list}>
                            <li>It's an implementation of a React-based front-end with a Supabase back-end</li>
                            <li>Emphasizes the use of functional components and CSS Modules</li>
                            <li>Front-end code (JS, JSX, CSS) entirely written by me</li>
                            <li>Back-end code (Supabase) set up by my mentor</li>
                            <li>Backlog based on user stories</li>
                            <li>Work based on code reviews and pull requests under my mentor's supervision</li>
                        </ul>
                    </p>
                </div>
                {/* <IBOSSlider />
                <div className={styles.image_container}>
                    <img src={imageSrc} alt='Images' />
                </div> */}
            </div>
        </>
    );
}

export default IBOSPage;