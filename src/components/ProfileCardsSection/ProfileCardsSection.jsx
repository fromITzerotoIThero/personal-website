import React from 'react';
import styles from './ProfileCardsSection.module.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import StackPillsCard from '../StackPillsCard/StackPillsCard';
import LogoBee from "../../logo-bee-no-background.svg";

function ProfileCardsSection() {
    return (
        <section className={styles.container}>
            <ProfileCard
                heading="About"
                content="I'm a former medical doctor. It took me quite a lot of time to figure out what my dream profession is,
                but now that I've found it, it just feels so good! 
                Front-end development - <3UTTMAB!!!"
                imageSrc={LogoBee}
            />
            <ProfileCard
                heading="Stack"
                content={
                    <StackPillsCard />
                }
            />
            <ProfileCard
                heading="What's unique about me?"
                content={
                    <ul>
                        <li>I love working with people and I'm good at it!</li>
                        <li>It's not just that I speak English well, I really like communicating in English :{")"}</li>
                        <li>"DIG DEEPER!" is my motto when it comes down to understanding things - 
                            I strive for a profound understanding of concepts and languages - that why I love MDN and all sorts of docs</li>
                    </ul>
                }
            />
        </section>
    );
}

export default ProfileCardsSection;