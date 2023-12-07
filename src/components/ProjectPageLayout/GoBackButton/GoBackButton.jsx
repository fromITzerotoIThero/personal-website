import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { ArrowBackLargeIcon } from '../../../assets/icons/icons';
import styles from './GoBackButton.module.css';

function GoBackButton() {
    return (
        <div className={styles.container}>
            <HashLink to='/#portfolio'>
                <button className={styles.button}>
                    <ArrowBackLargeIcon />
                </button>
            </HashLink>
        </div>
    );
}

export default GoBackButton;