import React from 'react'
import Header from '../../components/QuoteComponents/Header/Header.jsx'
import Footer from '../../components/QuoteComponents/Footer/Footer.jsx'
import QuoteCard from '../../components/QuoteComponents/QuoteCard/QuoteCard.jsx'
import { useState } from 'react'
import styles from './Summary.module.css'




const Summary = () => {

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

    var itemsArray = [{id: quoteData.plan, excess: quoteData.excess, value: quoteData.value}];

    for(var i=0; i<3; i++) {
     if(quoteData.extras[i] ==true) {
       itemsArray.push({id: i+4})
     }
    }

    // 1. Make request to server at the URL you create
    await fetch("http://localhost:8080/checkout/pay", { // URL of server (Azure deploy) (client and server are on different URLs). Can add this to env variable so I only need to change it in one place.
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    
    // 2. Send along the id and quantity of items you want to buy (based on planItems map in CheckoutController.js)
        body: JSON.stringify({
            items: [
              { id: 2, excess: quoteData.excess, value: quoteData.value }, //choosing Comprehensive plan.
              { id: 4 }, //choosing bonus cover: mech breakdown.
              { id: 6 }
          ],
            customer: {
                name: quoteData.d1firstname + " " + quoteData.d1lastname,
                email: quoteData.email
            },
        }), // Code block below: gets URL response back from server, and send user to that URL


    })

    // 3. Redirect user if it's a successful request.
      .then(res => {
        if(res.ok) return res.json() //if response is ok
        return res.json().then(json => Promise.reject(json)) // if it fails, take json response and make sure it actually fails ('fetch' doesn't fail on its own) and catch then that error. Send error down from server.
    })
      .then(({ url}) => {
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
            items: [
                { id: 2, excess: quoteData.excess, value: quoteData.value }, //choosing Comprehensive plan.
                { id: 4 }, //choosing bonus cover: mech breakdown.
                { id: 6 }
            ],
            customer: {
                name: quoteData.d1firstname + " " + quoteData.d1lastname,
                email: quoteData.email
            },
        }), // Code block below: gets URL response back from server, and send user to that URL
    })

    // 3. Redirect user if it's a successful request.
      .then(res => {
        if(res.ok) return res.json() //if response is ok
        return res.json().then(json => Promise.reject(json)) // if it fails, take json response and make sure it actually fails ('fetch' doesn't fail on its own) and catch then that error. Send error down from server.
    })
      .then(({ url}) => {
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
    <div className={styles.container}>
      <div className={styles['Header']}><Header /></div>
      <div><QuoteCard /></div>
      <div>
      <button className={styles.quote} onClick={handleQuote}>Download Your Quote</button>
      <button className={styles.checkout} onClick={handleCheckout}>Pay Now</button>
      </div>
      <div className={styles['Footer']}><Footer /> </div>
    </div>

  )


}

export default Summary