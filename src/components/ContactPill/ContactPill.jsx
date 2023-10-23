import React from 'react';
import styles from './ContactPill.module.css';

function ContactPill({ href, ariaLabel, iconComponent, contactInformation }) {
    return (
        <a href={href} aria-label={ariaLabel} className={styles.container}>
            {iconComponent}
            <div>{contactInformation}</div>
        </a>
    )
}

export default ContactPill;
