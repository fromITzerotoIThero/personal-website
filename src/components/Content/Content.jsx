import React from 'react';
import styles from './Content.module.css';
import ContentSection from '../../ideas/ContentSection/ContentSection';

function Content() {
    return (
        <main className={styles.content}>
            <ContentSection 
                heading="About"
                content={
                    <p>
                        I'm a former medical-doctor who took quite a lot of time to figure out her ideal, dream profession.
                    </p>
                }
            />
            <ContentSection 
                heading="Stack"
                content={
                    <ul>
                        <p>My programming profile:</p>
                        <li>Experience with React (JS, JSX) - I keep developing my own React app IBOS (see below)</li>
                        <li>Familiarity with npm, Material UI</li>
                        <li>Good understanding of JavaScript (the language itself, OOP) with the ability to use it</li>
                        <li>Huge fan of learning and understanding Vanilla JS - aiming to become the whiz of JS</li>
                        <li>Strong knowledge of HTML, CSS</li>
                        <li>Comfortable with Git and GitHub</li>
                        <li>Familiar with RDBMS and basic SQL</li>
                        <li>Enthusiast of Agile (Scrum) and iterative software development</li>
                        <li>Always on the lookout for good coding practices</li>
                        <li>Advanced English (C1) - CAE (grade A)</li>
                        <li>The most positive attitude you can get</li>
                    </ul>
                }
            />

        </main>
    );
}

export default Content;