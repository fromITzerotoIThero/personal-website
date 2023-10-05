import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard({ heading, content, imageSrc }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <p>{content}</p>
            {imageSrc &&
                <img src={imageSrc} alt="" className={styles.image} />
            }
        </div>
    );
}

export default ProfileCard;