import React from 'react';
import styles from './StatusBand.module.css';

function StatusBand({ statusText }) {
    return (
        <>
            <div className={styles.container}>
                {statusText}
            </div>
        </>
    );
}

export default StatusBand;