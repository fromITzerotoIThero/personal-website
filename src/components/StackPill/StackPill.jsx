import React from 'react';
import styles from './StackPill.module.css';

function StackPill({ logoComponent, logoLabel }) {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>{logoComponent}</div>
            <p className={styles.label}>{logoLabel}</p>
        </div>
    );
}

export default StackPill;