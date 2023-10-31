import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import styles from './MenuMobileItem.module.css';

function MenuMobileItem({ linkTarget, itemName, onMenuItemClick }) {
    return (
        <li className={styles.item} onClick={onMenuItemClick}>
            <NavHashLink to={linkTarget}>
                {itemName}
            </NavHashLink>
        </li>
    );
}

export default MenuMobileItem;