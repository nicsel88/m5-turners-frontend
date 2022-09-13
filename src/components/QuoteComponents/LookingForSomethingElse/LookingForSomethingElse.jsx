import React from 'react'
import styles from "./LookingForSomethingElse.module.css";
import auction from '../../../images/success-page/auction.png';
import boat from '../../../images/success-page/boats-and-trucks.png';
import tradeIn from '../../../images/success-page/trade-in.png';
import carSubscriptions from '../../../images/success-page/car-subscriptions.png';


const LookingForSomethingElse = () => {
    return (
      <div className={styles.somethingElse}>
          <h3>Looking for something else?</h3>
          <div className={styles.container}>
            <div className={styles.ImageRow}>
              <div className={styles.Item}>
                <img src={auction} alt='auction hammer' />
                <h4>Car auctions</h4>
              </div>
              <div className={styles.Item}>
                <img src={boat} alt='sailing boat' />
                <h4>Boats & trucks</h4>
              </div>  
              <div className={styles.Item}>
                <img src={tradeIn} alt='car key' />
                <h4>Trade in</h4>
              </div>
              <div className={styles.Item}>
                <img src={carSubscriptions} alt='car' />
                <h4>Car subscriptions</h4>
              </div>  
            </div>
          </div>
              
              
              
              
     </div>
    )
  }
  
  export default LookingForSomethingElse

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
