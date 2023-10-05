import React from 'react';
import styles from './ContentSection.module.css';

function ContentSection({ heading, content }) {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.heading}>{heading}</h1>
                <article className={styles.content}>
                    {content}
                </article>
            </section>            
        </div>
    )
}

export default ContentSection;
