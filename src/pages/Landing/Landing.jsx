import React from 'react'
import styles from './Landing.module.css'

import Navbar from '../../components/QuoteComponents/Navbar/Navbar.jsx'
import Hero from '../../components/QuoteComponents/Hero/Hero.jsx'
// import ChooseYourInsuranceToday from '../../components/QuoteComponents/ChooseYourInsuranceToday/ChooseYourInsuranceToday.jsx'
// import InsuranceFeatures from '../../components/QuoteComponents/InsuranceFeatures/InsuranceFeatures.jsx'
// import AvailablePlansOnOffer from '../../components/QuoteComponents/AvailablePlansOnOffer/AvailablePlansOnOffer.jsx'
// import OptionalExtras from '../../components/QuoteComponents/OptionalExtras/OptionalExtras.jsx'
// import FrequentlyAskedQuestions from '../../components/QuoteComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions.jsx'
import Footer from '../../components/QuoteComponents/Footer/Footer.jsx'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Landing