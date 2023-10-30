import React from 'react';
import { useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import { BeeLogo } from '../../assets/logos/logos';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Oh no! Something went wrong!</h1>
            <div className={styles.content}>
                <div className={styles.image_container}><BeeLogo /></div>
                <div>{error.statusText || error.message}</div>
            </div>
        </div>
    );
}

export default ErrorPage;