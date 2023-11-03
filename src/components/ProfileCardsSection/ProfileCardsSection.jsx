import React from 'react';
import styles from './ProfileCardsSection.module.css';
import * as icons from '../../assets/icons/icons';
import ProfileCard from '../ProfileCard/ProfileCard';
import InformationPill from '../InformationPill/InformationPill';
import StackPillsCard from '../StackPillsCard/StackPillsCard';

function ProfileCardsSection() {
    return (
        <section className={styles.container}>
            <div id="about" className={styles.navigation_trick_element}></div>
            <ProfileCard
                cardId="intro"
                heading="Intro"
                content={
                    <>
                        <InformationPill
                            icon={<icons.StethoscopeIcon />}
                            text="I'm a former medical doctor. It was supposed to be a job tailor-made for me, but instead, it made me feel miserable."
                        />
                        <InformationPill
                            icon={<icons.ArrowDownIcon />}
                            text="Took me quite some time to figure out what was wrong and, most importantly, what my dream profession was."
                        />
                        <InformationPill
                            icon={<icons.LaptopIcon />}
                            text="Once I started programming, I completely fell for it! Pure logic that allows for endless creativity - I love it to the moon and back!"
                        />
                    </>
                }
            />
            <ProfileCard
                cardId="stack"
                heading="Stack"
                content={
                    <StackPillsCard />
                }
            />
            <ProfileCard
                cardId="extras"
                heading="Extras"
                content={
                    <>
                        <InformationPill
                            icon={<icons.GroupOfPeopleIcon />}
                            text="I love working with people and I'm good at it. This has been proven through my experience on over 30 professional and 20 voluntary teams."
                        />
                        <InformationPill
                            icon={<icons.EnglishLanguageIcon />}
                            text="English-speaking clients? I'd be thrilled to talk to them! It's not only that I speak English very well, I genuinely enjoy using it."
                        />
                        <InformationPill
                            icon={<icons.MagnifyingGlassIcon />}
                            text="Dig deeper! - I strive for having a deep understading of the concepts I learn. Studying MDN or React docs is what I do on a regular basis."
                        />
                    </>

                }

            />
        </section>
    );
}

export default ProfileCardsSection;