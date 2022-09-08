import React from 'react'

import styles from "./FooterSuccess.module.css";

const FooterSuccess = () => {
    return (
        <div className={styles.footer}>
            <div className={styles['navigation-background']}>
                <div className={styles.navigation}>
                    <div>
                        <ul>
                            <li className={styles['navigation-block-header']}>cars</li>
                            <li>How to Buy</li>
                            <li>Sell Your Car</li>
                            <li>Finance & Insurance</li>
                            <li>Auctions & Events</li>
                            <li>Buyer & Seller Fees</li>
                            <li>Vehicle Sale Price History Tool</li>
                            <li>Shipping Costs</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={styles['navigation-block-header']}>finance & insurance</li>
                            <li>Finance Homepage</li>
                            <li>Car & Personal Finance</li>
                            <li>Loan Calculator</li>
                            <li>Car Insurance</li>
                            <li>Mechanical Breakdown Insurance</li>
                            <li>General Insurances</li>
                            <li>Trucks Finance</li>
                            <li>Financial Information</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={styles['navigation-block-header']}>search for</li>
                            <li>Cars</li>
                            <li>Trucks & Machinery</li>
                            <li>Damaged & End of Life Cars</li>
                            <li>Boats & Marine</li>
                            <li>Motorcycles & Scooters</li>
                            <li>General Goods</li>
                            <li>Buses, Caravans & Motorhomes</li>
                            <li>Turners Auction Schedule</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li className={styles['navigation-block-header']}>about us</li>
                            <li>Overview</li>
                            <li>Turners Careers</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Turners Live</li>
                            <li>The Good Oil Blog</li>
                            <li>Email Alerts</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>
            </div>
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

export default FooterSuccess