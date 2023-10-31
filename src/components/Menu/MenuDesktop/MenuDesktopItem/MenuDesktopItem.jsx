import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import styles from './MenuDesktopItem.module.css';

function MenuDesktopItem({ linkTarget, itemName }) {
    return (
        <li className={styles.item}>
            <NavHashLink to={linkTarget}>
                {itemName}
            </NavHashLink>
        </li>
    );
}

export default MenuDesktopItem;