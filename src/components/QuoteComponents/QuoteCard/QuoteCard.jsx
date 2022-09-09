import React from 'react'
import styles from "./QuoteCard.module.css";
import phone from '../../../images/summary-page/phone.png';
import copy from '../../../images/summary-page/copy-button.png';
import apply from '../../../images/summary-page/apply-button.png';
import car from '../../../images/summary-page/car.png';

const QuoteCard = () => {
    return (
      <div className={styles.background}>
          <div className={styles.quoteCard}>
              <h3>Your quote summary</h3>
              <div className={styles.container}>
                <div className={styles.card1}>
                  <h4>Comprehensive Cover</h4>
                  <div className={styles.agreedValue}>
                    <p>Agreed Value:</p>
                    <p>$12,000</p>
                  </div>
                  <div className={styles.agreedValue}>
                    <p>Excess Fee:</p>
                    <p>$500</p>
                  </div>
                  <div className={styles.addOns}>
                    <p>Add-ons:</p>
                    <p>Mechanical Breakdown</p>
                  </div>
                  <div className={styles.agreedValue}>
                    <p> </p>
                    <p>Cancel free within 15 days</p>
                  </div>
                </div>
                <div className={styles.card2}>
                  <h4>5% OFF</h4>
                  <p>For online purchases</p>
                  <div className={styles.code}>
                    <p>Code: BUYNOW5</p>
                    <div className={styles.copyApply}>
                      <button><img src={copy} alt='copy' /></button>
                      <button><img src={apply} alt='apply' /></button>
                    </div>
                  </div>
                </div>
                <div className={styles.card3}>
                  <div className={styles.radio}>
                    <div className={styles.payPeriod}>
                      <input type="radio" value="monthly" name="payPeriod" />
                      <h4>$36 /month</h4>
                    </div>
                    <div className={styles.payPeriod}>
                      <input type="radio" value="quarterly" name="payPeriod" />
                      <h4>$100 /quarter</h4>
                    </div>
                    <div className={styles.payPeriod}>
                      <input type="radio" value="annually" name="payPeriod" />
                      <h4>$380 /year</h4>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
          <div className={styles.needTime}>
            <h4>Need time to think it over?</h4>
            
          </div>
          <div className={styles.car}>
          <img src={car} alt='car' />
          </div>
          
     </div>
    )
  }
  
  export default QuoteCard

// const LookingForSomethingElse = () => {
//     return (
//         <div className={styles.hero}>
//             <div className={styles.overlay}>
//                 <h1>Get car insurance from the car experts</h1>
//                 <p>We’ve got you covered from comprehensive, third party fire & theft, to third party property damage. Start saving money on your premiums.</p>
//                 <button>Get a quote</button>
//             </div>
//         </div>

//     )
// }

// export default LookingForSomethingElse
