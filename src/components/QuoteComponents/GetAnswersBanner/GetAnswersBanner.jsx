import React from 'react'

import styles from "./GetAnswersBanner.module.css";
import carBackground1 from "../../../images/car-background1.png"
import ringingPhone from "../../../images/ringing-phone.png"

const getAnswersBanner = () => {
    return (
        <div className={styles.container}>
            <div classname={styles['background-image']}>
            <img src={carBackground1} alt="car and arrows backsplash" />
            </div>
            <div className={styles['text-overlay']}>
                <span className={styles.heading}>Get answers to all your questions</span>
                <span className={styles.prompt}>Shoot us an email to talk to our staff</span>
                <div className={styles['call-block']}>
                    <img src={ringingPhone} alt="phone glyph" />
                    <span>0800 887 637</span>
                </div>
            </div>
        </div>
    )
}

export default getAnswersBanner