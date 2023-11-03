import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ cardId, heading, content }) {
    return (
        <div className={styles.container}>
            <div id={cardId} className={styles.navigation_trick_element}></div>
            <h1 className={styles.heading}>{heading}</h1>
            <div className={styles.content}>{content}</div>
        </div>
    );
}

export default ProfileCard;