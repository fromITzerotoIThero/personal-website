import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import styles from './MenuMobileHamburger.module.css';
import { HamburgerMenu } from '../../../../assets/icons/icons';

function MenuMobileHamburger({ onClickHandler }) {
    const [isScrolled, setIsScrolled] = useState(false);

    const isLargeScreen = useMediaQuery({ minWidth: '480px' });

    useScrollPosition(({ currPos }) => {
        if (currPos.y < -180 && !isLargeScreen) {
            setIsScrolled(true);
        } else if (currPos.y < -280 && isLargeScreen) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const menuContainerClass = isScrolled ?
        `${styles.container_external} ${styles.scrolled}`
        :
        styles.container_external;

    return (
        <div className={menuContainerClass}>
            <nav className={styles.container}>
                <button
                    className={styles.button}
                    onClick={onClickHandler}>
                    <HamburgerMenu />
                </button>
            </nav>
        </div>
    );
}

export default MenuMobileHamburger;


