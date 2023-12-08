import React, { useState } from 'react';
import styles from './HeartAnimation.module.css';

function HeartAnimation() {
    const [randomX, setRandomX] = useState(Math.random()*2-1);
    const [randomY, setRandomY] = useState(Math.random()/4+0.75);
    return (
        <div class={styles.heart} style={{"--randomX":  randomX, "--randomY": randomY}}>
            ❤️
        </div>
    );
}

export default HeartAnimation;