import React from 'react';
import { useState } from 'react';
import styles from './MenuMobile.module.css';
import MenuMobileItem from '../MenuMobileItem/MenuMobileItem';

function MenuMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {isMenuOpen ?
                <div className={styles.menu_overlay}>
                    <nav className={styles.open}>
                        <button
                            className={`${styles.button} ${styles.close_menu}`}
                            onClick={closeMenu}>
                            X CLOSE
                        </button>
                        <ul>
                            <MenuMobileItem
                                itemName="About"
                            />
                            <MenuMobileItem
                                itemName="Blabla"
                            />
                            <MenuMobileItem
                                itemName="Portfolio"
                            />
                            <MenuMobileItem
                                itemName="Contact"
                            />
                            <MenuMobileItem
                                itemName="About"
                            />
                            <MenuMobileItem
                                itemName="Blabla"
                            />
                            <MenuMobileItem
                                itemName="Portfolio"
                            />
                            <MenuMobileItem
                                itemName="Contact"
                            />
                        </ul>
                    </nav>
                </div>
                :
                <nav className={styles.closed}>
                    <button
                        className={`${styles.button} ${styles.open_menu}`}
                        onClick={toggleMenu}>
                        MENU
                    </button>
                    {/* <MenuMobileItem
                            itemName="About"
                        />
                        <MenuMobileItem
                            itemName="Blabla"
                        />
                        <MenuMobileItem
                            itemName="Portfolio"
                        />
                        <MenuMobileItem
                            itemName="Contact"
                        /> */}
                </nav>
            }
        </>
    );
}

export default MenuMobile;


// import React from 'react';
// import { useState } from 'react';
// import styles from './MenuMobile.module.css';
// import MenuMobileItem from '../MenuMobileItem/MenuMobileItem';

// function MenuMobile() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     return (
//         <>
//             {isMenuOpen ?
//                 <nav className={styles.open}>
//                     <button
//                         className={`${styles.button} ${styles.close_menu}`}
//                         onClick={closeMenu}>
//                         X CLOSE
//                     </button>
//                     <ul>
//                         <MenuMobileItem
//                             itemName="About"
//                         />
//                         <MenuMobileItem
//                             itemName="Blabla"
//                         />
//                         <MenuMobileItem
//                             itemName="Portfolio"
//                         />
//                         <MenuMobileItem
//                             itemName="Contact"
//                         />
//                         <MenuMobileItem
//                             itemName="About"
//                         />
//                         <MenuMobileItem
//                             itemName="Blabla"
//                         />
//                         <MenuMobileItem
//                             itemName="Portfolio"
//                         />
//                         <MenuMobileItem
//                             itemName="Contact"
//                         />
//                         <MenuMobileItem
//                             itemName="About"
//                         />
//                         <MenuMobileItem
//                             itemName="Blabla"
//                         />
//                         <MenuMobileItem
//                             itemName="Portfolio"
//                         />
//                         <MenuMobileItem
//                             itemName="Contact"
//                         />
//                     </ul>
//                 </nav>
//                 :
//                 <nav className={styles.closed}>
//                     <button
//                         className={`${styles.button} ${styles.open_menu}`}
//                         onClick={toggleMenu}>
//                         MENU
//                     </button>
//                     {/* <MenuMobileItem
//                             itemName="About"
//                         />
//                         <MenuMobileItem
//                             itemName="Blabla"
//                         />
//                         <MenuMobileItem
//                             itemName="Portfolio"
//                         />
//                         <MenuMobileItem
//                             itemName="Contact"
//                         /> */}
//                 </nav>
//             }
//         </>
//     );
// }

// export default MenuMobile;