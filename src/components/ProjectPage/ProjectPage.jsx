import React from 'react';
import styles from './ProjectPage.module.css';

function ProjectPage({projectName, projectDescription}) {
    return (
        <div>
            <h1 className={styles.heading}>{projectName}</h1>
            <h1>It's actually tests</h1>
            <div className={styles.description}>
                {projectDescription}
            </div>
            <div className={styles.gallery}>
            </div>
        </div>
    );
}

export default ProjectPage;