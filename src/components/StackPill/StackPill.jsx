import React, { useEffect, useState } from 'react';
import styles from './StackPill.module.css';
import { supabase } from '../../services/supabase';
import HeartAnimation from '../HeartAnimation/HeartAnimation';

function StackPill({ logoComponent, logoLabel, isInProgress }) {
    const [count, setCount] = useState(0);
    const [hearts, setHearts] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await supabase
                .from('Counters')
                .select('*',{ count: 'exact', head: true })
                .eq('tech_name', `${logoLabel}`);

            setCount(data.count);
            console.log(data)
        }
        fetchData();
    });

    async function addTech() {
        const { error } = await supabase.from('Counters').insert({tech_name: logoLabel})
        setHearts(hearts + 1);
        setCount(count + 1);
    }
    return (
        <button className={styles.container} onClick={addTech}>
            {isInProgress &&
                <div className={styles.progress_band}>WIP</div>
            }

            <div className={styles.logo}>{logoComponent}</div>
            <p className={styles.label}>{logoLabel}{count > 0 ? ` (${count})` : ''}</p>
            { [...Array(hearts)].map(heart => <HeartAnimation></HeartAnimation>) }
            
        </button>
    );
}

export default StackPill;