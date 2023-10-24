import React from 'react';
import styles from './MenuMobileFlyout.module.css';
import MenuMobileItem from '../MenuMobileItem/MenuMobileItem';

function MenuMobileFlyout({onCloseHandler}) {
    return (
        <div className={styles.overlay} >
            <nav className={styles.open}>
                <button
                    className={`${styles.button} ${styles.close_menu}`}
                    onClick={onCloseHandler}>
                    X CLOSE
                </button>
                <ul>
                    <MenuMobileItem
                        itemName="About"
                    />
                    <MenuMobileItem
                        itemName="Blabla"
                    />
                    <MenuMobileItem
                        itemName="Portfolio"
                    />
                    <MenuMobileItem
                        itemName="Contact"
                    />
                </ul>
            </nav>
        </div >
    )
}

export default MenuMobileFlyout



