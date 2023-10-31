import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuDesktopItem.module.css';

function MenuDesktopItem({ linkTarget, itemName }) {
    return (
        <li className={styles.item}>
            <NavLink to={linkTarget}>
                {itemName}
            </NavLink>
        </li>
    );
}

export default MenuDesktopItem;