import React from 'react'
import Header from '../../components/QuoteComponents/Header/Header.jsx'
import Footer from '../../components/QuoteComponents/Footer/Footer.jsx'
import QuoteCard from '../../components/QuoteComponents/QuoteCard/QuoteCard.jsx'
import { useState } from 'react'
import styles from './Summary.module.css'




const Summary = () => {
  return (
    <>
      <Header />
      <QuoteCard />    
      <Footer />
    </>
  )


}

export default Summary