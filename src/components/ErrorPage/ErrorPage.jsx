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
            <div className={styles.content_container}>
                <div className={styles.image_container}><BeeLogo /></div>
                <div className={styles.text}>
                    <h3>{`${error.status} - ${error.statusText}` || error.message}</h3>
                    <div>Sorry for the inconvenience!</div>
                    {/* <div>In the meantime, you can try the following:</div>
                    <ul>
                        <li>Refresh the page and see if the issue resolves.</li>
                        <li>Check your internet connection.</li>
                        <li>Clear your browser's cache and cookies.</li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;