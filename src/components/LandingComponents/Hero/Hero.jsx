import React from 'react'

import styles from "./Hero.module.css";
import heroBackground from '../../../images/hero-background.png'
const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}>
                <h1>Get car insurance from the car experts</h1>
                <p>We’ve got you covered from comprehensive, third party fire & theft, to third party property damage. Start saving money on your premiums.</p>
                <button>Get a quote</button>
            </div>
        </div>

    )
}

export default Hero