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
                        linkTarget="/#about"
                    />
                    <MenuMobileItem
                        itemName="Portfolio"
                        linkTarget="/#portfolio"
                    />
                    <MenuMobileItem
                        itemName="Contact"
                        linkTarget="/#contact"
                    />
                </ul>
            </nav>
        </div >
    )
}

export default MenuMobileFlyout



