import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import styles from './MenuMobileItem.module.css';

function MenuMobileItem({ linkTarget, itemName }) {
    return (
        <li className={styles.item}>
            <NavHashLink to={linkTarget}>
                {itemName}
            </NavHashLink>
        </li>
    );
}

export default MenuMobileItem;