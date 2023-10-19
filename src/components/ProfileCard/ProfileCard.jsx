import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ heading, content }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.content}>{content}</p>
        </div>
    );
}

export default ProfileCard;