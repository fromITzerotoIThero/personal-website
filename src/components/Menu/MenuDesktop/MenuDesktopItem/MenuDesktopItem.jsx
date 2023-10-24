import React from 'react';
import styles from './MenuDesktopItem.module.css';

function MenuDesktopItem({ linkTarget, itemName }) {
    return (
        <li className={styles.item}>
            <a href={linkTarget}>
                {itemName}
            </a>
        </li>
    );
}

export default MenuDesktopItem;