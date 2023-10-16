import React from 'react';
import styles from './ProfileCardsSection.module.css';
// import * as icons from '../../assets/icons/icons';
// import Stethoscope from '../../assets/icons/stethoscope-icon.svg';
import ProfileCard from '../ProfileCard/ProfileCard';
// import InformationPill from '../InformationPill/InformationPill';
import StackPillsCard from '../StackPillsCard/StackPillsCard';

function ProfileCardsSection() {
    return (
        <section className={styles.container}>
            <ProfileCard
                heading="About"
                content="a"
            />
            <ProfileCard
                heading="Stack"
                content={
                    <StackPillsCard />
                }
            />
            <ProfileCard
                heading="What's unique about me?"
                content="b"
            />
        </section>
    );
}

export default ProfileCardsSection;