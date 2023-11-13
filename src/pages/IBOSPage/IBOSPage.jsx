import React from 'react';
import styles from './IBOSPage.module.css';
import { GitHubLogoCustom } from '../../assets/logos/logos';
import { WebsiteIcon } from '../../assets/icons/icons';
import ContactPill from '../../components/ContactPill/ContactPill';

function IBOSPage() {
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
                    <div>
                        I Build On Strenghts is a mock online shop selling conference freebies inspired by Gallup StrengthsFinder Themes.
                    </div>
                    <div>
                        This project is my training field for learning React.js.
                    </div>
                    <ul className={styles.list}>
                        <li>Front-end code (JS, JSX, CSS) entirely written by me</li>
                        <li>Back-end code (Supabase) set up by my mentor</li>
                        <li>Backlog based on user stories</li>
                        <li>Work based on code reviews and pull requests under my mentor's supervision</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default IBOSPage;