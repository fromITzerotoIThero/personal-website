import React from 'react';
import styles from './MenuMobileFlyout.module.css';
import MenuMobileItem from '../MenuMobileItem/MenuMobileItem';

function MenuMobileFlyout({onCloseHandler}) {
    return (
        <div className={styles.overlay} >
            <nav className={styles.navigation}>
                <button
                    className={styles.button}
                    onClick={onCloseHandler}>
                    X CLOSE
                </button>
                <ul>
                    <MenuMobileItem
                        itemName="About"
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



