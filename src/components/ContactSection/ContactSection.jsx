import React from 'react';
import { GitHubLogoCustom, LinkedInLogo } from '../../assets/logos/logos';
import { EmailIcon, TelephoneIcon, DownloadIcon } from '../../assets/icons/icons';
import styles from './ContactSection.module.css';
import ContactPill from '../ContactPill/ContactPill';

function ContactSection() {

    return (
        <section id="contact" className={styles.container}>
            <h1 className={styles.heading}>Contact me</h1>
            <div className={styles.pills_container}>
                <ContactPill
                    href="https://www.linkedin.com/in/gosia-panek/"
                    ariaLabel="LinkedIn profile"
                    iconComponent={<LinkedInLogo />}
                    contactInformation="LinkedIn Profile"
                />
                <ContactPill
                    href="https://github.com/fromITzerotoIThero"
                    ariaLabel="GitHub repository"
                    iconComponent={<GitHubLogoCustom />}
                    contactInformation="GitHub Repository"
                />
                <ContactPill
                    href="mailto:mpanek.uni@gmail.com"
                    ariaLabel="Email: mpanek.uni@gmail.com"
                    iconComponent={<EmailIcon />}
                    contactInformation="mpanek.uni@gmail.com"
                />
                <ContactPill
                    href="/assets/gosia-panek-cv.pdf"
                    ariaLabel="Download resume"
                    iconComponent={<DownloadIcon />}
                    contactInformation="Download CV"
                    download={true}
                />
            </div>
        </section>
    );
}

export default ContactSection;