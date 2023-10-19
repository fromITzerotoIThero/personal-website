import React from 'react';
import styles from './InformationPill.module.css';

function InformationPill({ icon, text }) {
    return (
        <div className={styles.container}>
            <div className={styles.icon_container}>{icon}</div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default InformationPill;