import React from 'react';
import styles from './MenuMobileItem.module.css';

function MenuMobileItem({ linkTarget, itemName }) {
    return (
        <li className={styles.item}>
            <a href={linkTarget}>
                {itemName}
            </a>
        </li>
    );
}

export default MenuMobileItem;