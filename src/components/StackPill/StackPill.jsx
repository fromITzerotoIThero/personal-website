import React from 'react';
import styles from './StackPill.module.css';

function StackPill({ logoSrc, logoLabel }) {
    return (
        <div className={styles.container}>
            <img src={logoSrc} alt={logoLabel} />
            <p className={styles.label}>{logoLabel}</p>
        </div>
    );
}

export default StackPill;