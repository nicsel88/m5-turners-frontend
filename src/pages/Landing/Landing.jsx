import React from 'react'
import styles from './Landing.module.css'

import Navbar from '../../components/LandingComponents/Navbar/Navbar.jsx'
import Hero from '../../components/LandingComponents/Hero/Hero.jsx'
// import ChooseYourInsuranceToday from '../../components/LandingComponents/ChooseYourInsuranceToday/ChooseYourInsuranceToday.jsx'
// import InsuranceFeatures from '../../components/LandingComponents/InsuranceFeatures/InsuranceFeatures.jsx'
// import AvailablePlansOnOffer from '../../components/LandingComponents/AvailablePlansOnOffer/AvailablePlansOnOffer.jsx'
// import OptionalExtras from '../../components/LandingComponents/OptionalExtras/OptionalExtras.jsx'
// import FrequentlyAskedQuestions from '../../components/LandingComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions.jsx'
import Footer from '../../components/LandingComponents/Footer/Footer.jsx'

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