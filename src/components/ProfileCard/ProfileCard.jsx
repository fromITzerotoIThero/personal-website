import React from "react";
import styles from "./ProfileCard.module.css";
import { InfoCircleIcon } from "../../assets/icons/icons";

function ProfileCard({ cardId, heading, content, tooltip }) {
    return (
        <div className={styles.container}>
            <div id={cardId} className={styles.navigation_trick_element}></div>
            <h1 className={styles.heading}>{heading}{tooltip ? <div class={styles.info} title={tooltip}><InfoCircleIcon></InfoCircleIcon></div> : null}</h1>
            <div className={styles.content}>{content}</div>
        </div>
    );
}

export default ProfileCard;