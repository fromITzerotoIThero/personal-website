import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import styles from './MenuDesktop.module.css';
import MenuDesktopItem from './MenuDesktopItem/MenuDesktopItem';

function MenuDesktop() {
    const [isScrolled, setIsScrolled] = useState(false);
    useScrollPosition(({ currPos }) => {
        if (currPos.y < - 400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    },
        []
    );

    const menuContainerClass = isScrolled ?
        `${styles.container_external} ${styles.scrolled}`
        :
        styles.container_external;

    return (
        <div className={menuContainerClass}>
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