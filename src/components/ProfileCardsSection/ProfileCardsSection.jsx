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
                content="I'm a former medical doctor. It took me quite a lot of time to figure out what my dream profession is, but I'm finally there XD"
                imageSrc={LogoBee}
            />
            <ProfileCard
                heading="Stack"
                content={
                    <StackPillsCard />
                }
            />
            <ProfileCard
                heading="About"
                content="I'm a former medical doctor. It took me quite a lot of time to figure out what my dream profession is, but I'm finally there XD"
            />
        </section>
    );
}

export default ProfileCardsSection;