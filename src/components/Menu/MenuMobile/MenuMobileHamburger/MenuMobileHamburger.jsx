import React from 'react';
import styles from './MenuMobileHamburger.module.css';

function MenuMobileHamburger({ onClickHandler }) {
    return (
        <nav className={styles.container}>
            <button
                className={styles.button}
                onClick={onClickHandler}>
                MENU
            </button>
        </nav>
    );
}

export default MenuMobileHamburger;


