import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile/MenuMobile';
import MenuDesktop from './MenuDesktop/MenuDesktop';

function Menu() {
    const isMobile = !useMediaQuery({ minWidth: '768px' });

    return (
        <>
            {isMobile ?
                <MenuMobile />
                :
                <MenuDesktop />
            }
        </>
    );
}

export default Menu;