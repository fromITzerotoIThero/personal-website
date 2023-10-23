import React from 'react';
import styles form './ContactPill.module.css';

function ContactPill() {
  return (
    <div>ContactPill</div>
  )
}

export default ContactPill


// import React from 'react';
// import styles from './StackPill.module.css';

// function StackPill({ logoComponent, logoLabel, isInProgress }) {
//     return (
//         <div className={styles.container}>
//             {isInProgress &&
//                 <div className={styles.progress_band}>WIP</div>
//             }

//             <div className={styles.logo}>{logoComponent}</div>
//             <p className={styles.label}>{logoLabel}</p>
//         </div>
//     );
// }

// export default StackPill;