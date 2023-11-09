import React from 'react';
import styles from './IBOSPage.module.css';
import { GitHubLogoCustom } from '../../assets/logos/logos';
import ContactPill from '../../components/ContactPill/ContactPill';
import ProjectPage from '../../components/ProjectPage/ProjectPage';

function IBOSPage() {
    return (
        <>
            <ProjectPage />
            <div className={styles.container}>
                <h1>IBOS</h1>
                <ContactPill
                    href="https://ibos.netlify.app/"
                    ariaLabel="IBOS mock shop app"
                    iconComponent={<GitHubLogoCustom />}
                    contactInformation="IBOS repository"
                />
                <ContactPill
                    href="https://github.com/fromITzerotoIThero/IBOS"
                    ariaLabel="IBOS Project GitHub Repository"
                    iconComponent={<GitHubLogoCustom />}
                    contactInformation="IBOS repository"
                />
                <div>
                    <div>
                        I Build On Strenghts is a mock online shop selling conference freebies inspired by Gallup StrengthsFinder Themes.
                    </div>
                    <div>
                        This project is my training field for learning React.js.
                    </div>
                    <ul>
                        <li>Front-end code (JS, JSX, CSS) entirely written by me</li>
                        <li>Back-end code (Supabase) set up by my mentor</li>
                        <li>Backlog based on user stories</li>
                        <li>Work based on code reviews and pull requests under my mentor's supervision</li>
                        <li>https://github.com/fromITzerotoIThero/IBO3</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default IBOSPage;