import React from 'react';
import styles from './MenuDesktop.module.css';
import MenuDesktopItem from './MenuDesktopItem/MenuDesktopItem';

function MenuDesktop() {
    return (
        <div className={styles.container_external}>
            <nav className={styles.container}>
                <ul className={styles.list}>
                    <MenuDesktopItem
                        itemName="About"
                        linkTarget="/#about"
                    />
                    <MenuDesktopItem
                        itemName="Portfolio"
                        linkTarget="/#portfolio"
                    />
                    <MenuDesktopItem
                        itemName="Contact"
                        linkTarget="/#contact"
                    />
                </ul>
            </nav>
        </div>
    );
}

export default MenuDesktop;