import React from 'react'

import styles from "./ProgressBar.module.css";

const ProgressBar = ({step}) => {
    console.log(step)
    const stepSwitch = (step) => {
        switch (step) {
            case 1:
              return (
                <>
                <div className={styles['top-accent-1']}></div>
                <div className={styles['progress-container']}>
                    <div className={styles['progress-location']}>
                        <div className={styles['circle-active']}><span>1</span></div>
                        <span>Car</span>
                    </div>
                    <div className={styles['progress-container-spacer-inactive']}></div>
                    <div className={styles['progress-location-inactive']}>
                    <div className={styles['circle-inactive']}><span>2</span></div>
                        <span>Driver</span>
                    </div>
                    <div className={styles['progress-container-spacer-inactive']}></div>
                    <div className={styles['progress-location-inactive']}>
                    <div className={styles['circle-inactive']}><span>3</span></div>
                        <span>Plan</span>
                    </div>
                </div>
                </>
              )
            case 2: 
              return (
                <>
                <div className={styles['top-accent-2']}></div>
                <div className={styles['progress-container']}>
                    <div className={styles['progress-location-active']}>
                        <div className={styles['circle-active']}><span>✓</span></div>
                        <span>Car</span>
                    </div>
                    <div className={styles['progress-container-spacer-active']}></div>
                    <div className={styles['progress-location-active']}>
                    <div className={styles['circle-active']}><span>2</span></div>
                        <span>Driver</span>
                    </div>
                    <div className={styles['progress-container-spacer-inactive']}></div>
                    <div className={styles['progress-location-inactive']}>
                    <div className={styles['circle-inactive']}><span>3</span></div>
                        <span>Plan</span>
                    </div>
                </div>
                </>
              )
            case 3: 
              return (
                <>
                <div className={styles['top-accent-3']}></div>
                <div className={styles['progress-container']}>
                    <div className={styles['progress-location-active']}>
                        <div className={styles['circle-active']}><span>✓</span></div>
                        <span>Car</span>
                    </div>
                    <div className={styles['progress-container-spacer-active']}></div>
                    <div className={styles['progress-location-active']}>
                    <div className={styles['circle-active']}><span>✓</span></div>
                        <span>Driver</span>
                    </div>
                    <div className={styles['progress-container-spacer-active']}></div>
                    <div className={styles['progress-location-active']}>
                    <div className={styles['circle-active']}><span>3</span></div>
                        <span>Plan</span>
                    </div>
                </div>
                </>
              )
            default:
              return (
                <div>hi</div>
              )
          }
    }

    return (
        <div className={styles.container}>
            {stepSwitch(step)}
        </div>
    )
}

export default ProgressBar