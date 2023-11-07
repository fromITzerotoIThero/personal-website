import React from 'react';
import styles from './MenuMobileFlyout.module.css';
import { CloseButton } from '../../../../assets/icons/icons';
import HomeButton from '../../HomeButton/HomeButton';
import MenuMobileItem from '../MenuMobileItem/MenuMobileItem';

function MenuMobileFlyout({ onCloseHandler }) {
    return (
        <div className={styles.overlay} >
            <nav className={styles.navigation}>
                <div className={styles.button_container}>
                    <div className={styles.home_button_container} onClick={onCloseHandler}>
                        <HomeButton />
                    </div>
                    <button className={styles.button} onClick={onCloseHandler}>
                        <CloseButton />
                    </button>
                </div>
                <ul>
                    <MenuMobileItem
                        itemName="About"
                        linkTarget="/#about"
                        onMenuItemClick={onCloseHandler}
                    />
                    <ul className={styles.submenu}>
                        <MenuMobileItem
                            itemName="Intro"
                            linkTarget="/#intro"
                            onMenuItemClick={onCloseHandler}
                        />
                        <MenuMobileItem
                            itemName="Stack"
                            linkTarget="/#stack"
                            onMenuItemClick={onCloseHandler}
                        />
                        <MenuMobileItem
                            itemName="Extras"
                            linkTarget="/#extras"
                            onMenuItemClick={onCloseHandler}
                        />
                    </ul>
                    <MenuMobileItem
                        itemName="Portfolio"
                        linkTarget="/#portfolio"
                        onMenuItemClick={onCloseHandler}
                    />
                    <ul className={styles.submenu}>
                        <MenuMobileItem
                            itemName="IBOS"
                            linkTarget="/#portfolio"
                            onMenuItemClick={onCloseHandler}
                        />
                        <MenuMobileItem
                            itemName="Anex"
                            linkTarget="/#portfolio"
                            onMenuItemClick={onCloseHandler}
                        />
                        <MenuMobileItem
                            itemName="ProMa"
                            linkTarget="/#portfolio"
                            onMenuItemClick={onCloseHandler}
                        />
                    </ul>
                    <MenuMobileItem
                        itemName="Contact"
                        linkTarget="/#contact"
                        onMenuItemClick={onCloseHandler}
                    />
                </ul>
            </nav>
        </div >
    )
}

export default MenuMobileFlyout



