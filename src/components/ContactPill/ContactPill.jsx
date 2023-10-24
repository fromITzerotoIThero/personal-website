import React from 'react';
import styles from './ContactPill.module.css';

function ContactPill({ href, ariaLabel, iconComponent, contactInformation, download = false, target = "_blank"}) {
    return (
        <a href={href} aria-label={ariaLabel} className={styles.container} download={download} target={target} rel="noopener noreferrer">
            <div className={styles.icon_container}>{iconComponent}</div>
            <div className={styles.text}>{contactInformation}</div>
        </a>
    )
}

export default ContactPill;
