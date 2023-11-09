import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './ProjectPageLayout.module.css';
import HomeButton from '../Menu/HomeButton/HomeButton';
import GoBackButton from './GoBackButton/GoBackButton';

function ProjectPageLayout() {
    return (
        <>
            <nav className={styles.navigation}>
                <HomeButton />
                <GoBackButton />
            </nav>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </>
    );
}

export default ProjectPageLayout;