import React from 'react';
import styles from './MenuDesktop.module.css';
import MenuDesktopItem from '../MenuDesktopItem/MenuDesktopItem';

function MenuDesktop() {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <MenuDesktopItem
                    itemName="About"
                    linkTarget=""
                />
                <MenuDesktopItem
                    itemName="Portfolio"
                    linkTarget=""
                />
                <MenuDesktopItem
                    itemName="Blablabla"
                    linkTarget=""
                />
                <MenuDesktopItem
                    itemName="Contact"
                    linkTarget=""
                />
            </ul>

        </nav>
    );
}

export default MenuDesktop;