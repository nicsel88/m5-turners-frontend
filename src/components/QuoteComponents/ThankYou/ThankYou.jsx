import React from 'react'

import styles from "./ThankYou.module.css";
import '../../../images/success-page/success-hero.png';
import '../../../images/success-page/tick-icon.png';
import tickIcon from '../../../images/success-page/tick-icon.png';

const ThankYou = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}>
                <img src={tickIcon} alt='Tick' style={{ height: '7vh' }} />
                <h3>Thank you!</h3>
                <p>Your policy has been sent to your email.</p>
            </div>
        </div>

    )
}

export default ThankYou