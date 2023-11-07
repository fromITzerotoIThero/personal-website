import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { HomePageIcon } from '../../../assets/icons/icons';
import styles from './HomeButton.module.css';

function HomeButton() {
    return (
        <div className={styles.container}>
            <NavHashLink to="/#home">
                <button className={styles.button}>
                    <HomePageIcon />
                </button>
            </NavHashLink>
        </div>
    );
}

export default HomeButton;