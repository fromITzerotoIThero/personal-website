import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ heading, content }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <div className={styles.content}>{content}</div>
        </div>
    );
}

export default ProfileCard;