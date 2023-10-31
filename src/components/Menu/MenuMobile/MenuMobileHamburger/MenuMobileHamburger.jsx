import React from 'react';
import styles from './MenuMobileHamburger.module.css';

function MenuMobileHamburger({ onClickHandler }) {
    return (
       <div className={styles.container_external}>
            <nav className={styles.container}>
                <button
                    className={styles.button}
                    onClick={onClickHandler}>
                    MENU
                </button>
            </nav>
       </div>
    );
}

export default MenuMobileHamburger;


