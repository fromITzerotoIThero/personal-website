import React from 'react';
import styles from './MenuMobileHamburger.module.css';

function MenuMobileHamburger({ onClickHandler }) {
    return (
        <nav className={styles.closed}>
            <button
                className={`${styles.button} ${styles.open_menu}`}
                onClick={onClickHandler}>
                MENU
            </button>
        </nav>
    );
}

export default MenuMobileHamburger;


