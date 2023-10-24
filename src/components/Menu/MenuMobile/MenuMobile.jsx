import React from 'react';
import { useState } from 'react';
import MenuMobileFlyout from './MenuMobileFlyout/MenuMobileFlyout';
import MenuMobileHamburger from './MenuMobileHamburger/MenuMobileHamburger';

function MenuMobile() {
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuMobileOpen(!isMenuMobileOpen);
    };

    const closeMenu = () => {
        setIsMenuMobileOpen(false);
    };

    return (
        <>
            {isMenuMobileOpen ?
                <MenuMobileFlyout
                    onCloseHandler={closeMenu}
                />
                :
                <MenuMobileHamburger
                    onClickHandler={toggleMenu}
                />
            }
        </>
    );
}

export default MenuMobile;