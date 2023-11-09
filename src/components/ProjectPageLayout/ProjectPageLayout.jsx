import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './ProjectPageLayout.module.css';
import Menu from '../Menu/Menu';

function ProjectPageLayout() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
}

export default ProjectPageLayout;