import React from 'react';
import { useRouteError } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styles from './ErrorPage.module.css';
import { BeeLogo } from '../../assets/logos/logos';
import { HomePageIcon } from '../../assets/icons/icons';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Oh no!<br />Something went wrong!</h2>
            <div className={styles.content_container}>
                <div className={styles.image_container}><BeeLogo /></div>
                <div className={styles.text}>
                    {error && 
                        <h4>{`${error?.status} - ${error?.statusText}` || error?.message}</h4>
                    }
                    <h4>Sorry for the inconvenience!</h4>
                    <div>Go back to homepage:</div>
                    <NavHashLink to="/#home">
                        <button className={styles.button}>                           
                            <HomePageIcon />                        
                        </button>
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;