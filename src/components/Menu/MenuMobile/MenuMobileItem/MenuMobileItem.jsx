import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuMobileItem.module.css';

function MenuMobileItem({ linkTarget, itemName }) {
    return (
        <li className={styles.item}>
            <NavLink href={linkTarget}>
                {itemName}
            </NavLink>
        </li>
    );
}

export default MenuMobileItem;