import React from 'react'

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.banner}>
                <span>© Turners 2022</span>
                <ul>
                    <li>Branch Details</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Newsletter</li>
                    <li>Email Alerts</li>
                </ul>
            </div>

        </div>

    )
}

export default Footer