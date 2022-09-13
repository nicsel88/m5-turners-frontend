import React from 'react'
import styles from "./QuoteCard.module.css";
import phone from '../../../images/summary-page/phone.png';
import copy from '../../../images/summary-page/copy-button.png';
import apply from '../../../images/summary-page/apply-button.png';
import car from '../../../images/summary-page/car.png';
import background from '../../../images/summary-page/background.png'

const QuoteCard = () => {

  let quoteData = JSON.parse(window.localStorage.getItem("quoteData"));

  console.log(quoteData);

  const handleCheckout = async () => {

    // Next step: Integrate client and server
    // Make request to server to get URL to checkout page.
    // How stripe works: 
    // Give info (ids of products, number of product to buy)
    // Gets pricing info back from server, gives unique URL to redirect user to checkout and pay.
    //Make fetch request to server to endpoint:

    console.log(quoteData.excess);

    quoteData.quote = parseInt(quoteData.quote);

    var itemsArray = [{ id: parseInt(quoteData.plan), excess: parseInt(quoteData.excess), value: parseInt(quoteData.value) }];

    for (var i = 0; i < 3; i++) {
      if (quoteData.extras[i] == true) {
        itemsArray.push({ id: i + 4 })
      }
    }

    // console.log(itemsArray);

    // 1. Make request to server at the URL you create
    await fetch("http://localhost:8080/checkout/pay", { // URL of server (Azure deploy) (client and server are on different URLs). Can add this to env variable so I only need to change it in one place.
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      // 2. Send along the id and quantity of items you want to buy (based on planItems map in CheckoutController.js)
      body: JSON.stringify({
        items: itemsArray,
        customer: {
          name: quoteData.d1firstname + " " + quoteData.d1lastname,
          email: quoteData.email,
        },
        quote: quoteData.quote,
      }), // Code block below: gets URL response back from server, and send user to that URL


    })

      // 3. Redirect user if it's a successful request.
      .then(res => {
        if (res.ok) return res.json() //if response is ok
        return res.json().then(json => Promise.reject(json)) // if it fails, take json response and make sure it actually fails ('fetch' doesn't fail on its own) and catch then that error. Send error down from server.
      })
      .then(({ url }) => {
        // console.log(url)
        window.location = url
        // var embedPay = document.getElementById("id_embedpay"); //getting the embedpay element
        // var clone = embedPay.cloneNode(true); //copying it
        // clone.setAttribute("src", url); //modifying it to be our new url
        // embedPay.parentNode.replaceChild(clone, embedPay); //replace embedpay element
      })
      .catch(e => {
        console.error(e.error)
      }) //JSON response in the form of a URL, then we use that URL to set our window location.
  }


  const handleQuote = async () => {

    quoteData.quote = parseInt(quoteData.quote);

    var itemsArray = [{ id: parseInt(quoteData.plan), excess: parseInt(quoteData.excess), value: parseInt(quoteData.value) }];

    for (var i = 0; i < 3; i++) {
      if (quoteData.extras[i] == true) {
        itemsArray.push({ id: i + 4 })
      }
    }

    // Next step: Integrate client and server
    // Make request to server to get URL to checkout page.
    // How stripe works: 
    // Give info (ids of products, number of product to buy)
    // Gets pricing info back from server, gives unique URL to redirect user to checkout and pay.
    //Make fetch request to server to endpoint:

    // 1. Make request to server at the URL you create
    await fetch("http://localhost:8080/checkout/invoice", { // URL of server (client and server are on different URLs).
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      // 2. Send along the id and quantity of items you want to buy
      body: JSON.stringify({
        items: itemsArray,
        customer: {
          name: quoteData.d1firstname + " " + quoteData.d1lastname,
          email: quoteData.email
        },
        quote: quoteData.quote,
      }), // Code block below: gets URL response back from server, and send user to that URL
    })

      // 3. Redirect user if it's a successful request.
      .then(res => {
        if (res.ok) return res.json() //if response is ok
        return res.json().then(json => Promise.reject(json)) // if it fails, take json response and make sure it actually fails ('fetch' doesn't fail on its own) and catch then that error. Send error down from server.
      })
      .then(({ url }) => {
        // console.log(url)
        window.location = url
        // var embedPay = document.getElementById("id_embedpay"); //getting the embedpay element
        // var clone = embedPay.cloneNode(true); //copying it
        // clone.setAttribute("src", url); //modifying it to be our new url
        // embedPay.parentNode.replaceChild(clone, embedPay); //replace embedpay element
      })
      .catch(e => {
        console.error(e.error)
      }) //JSON response in the form of a URL, then we use that URL to set our window location.
  }

    return (
      <div className={styles.background}>
          <div className={styles.quoteCard}>
            <div className={styles.Title}>
              <h3>Your quote summary</h3>
            </div>
            <div className={styles.container}>
              <div className={styles.ContainerLeft}>
                <div className={styles.card1}>
                  <h4>Comprehensive Cover</h4>
                  <div className={styles.CardContent}>
                    <div className={styles.CardCategories}>
                      <p>Agreed Value:</p>
                      <p>Excess Fee:</p>
                      <p>Add-ons:</p>
                    </div>
                    <div className={styles.CardValues}>
                      <p>${quoteData.value}</p>
                      <p>${quoteData.excess}</p>
                      <p>Mechanical Breakdown</p>
                      <p>Cancel free within 15 days</p>
                    </div>
                  </div>
                </div>
                <div className={styles.card2}>
                  <div className={styles.ContainerLeft} style={{ gap: '1rem', alignItems: 'flex-start'}}>
                    <h4>5% OFF</h4>
                    <p>For online purchases</p>
                    <div className={styles.code}>
                      <p>Code: BUYNOW5</p>
                    </div>
                  </div>  
                  <div className={styles.ContainerRight} style={{ justifyContent: 'flex-end'}}>
                    <div className={styles.copyApply}>
                      <button><img src={copy} alt='copy' /></button>
                      <button><img src={apply} alt='apply' /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ContainerRight}>
                <div className={styles.card3}>
                  <div className={styles.radio}>
                    <div className={styles.payPeriod}>
                      <input type="radio" value="monthly" name="payPeriod" />
                      <h4>${(quoteData.quote/12+5).toFixed(2)} /month</h4>
                    </div>
                    <div className={styles.payPeriod}>
                      <input type="radio" value="quarterly" name="payPeriod" />
                      <h4>${(quoteData.quote/4+10).toFixed(2)} /quarter</h4>
                    </div>
                    <div className={styles.payPeriod}>
                      <input type="radio" value="annually" name="payPeriod" checked />
                      <label for = "annually"><h4><b>${quoteData.quote} /year</b></h4></label>
                    </div>
                    <button className={styles.checkout} onClick={handleCheckout}>Pay Now</button>
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
        <div className={styles.BottomBanner}>
          <div className={styles.needTime}>
            <h4>Need time to think it over?</h4>
            <button className={styles.quote} onClick={handleQuote}>Download Your Quote</button>
          </div>
          <div className={styles.car}>
            <img src={car} alt='car' />
          </div>
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
