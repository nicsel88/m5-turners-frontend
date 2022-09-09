import React from 'react'
// import Navbar from '../../components/QuoteComponents/Navbar/Navbar.jsx'
import ThankYou from '../../components/QuoteComponents/ThankYou/ThankYou.jsx'
import LookingForSomethingElse from '../../components/QuoteComponents/LookingForSomethingElse/LookingForSomethingElse.jsx'
// import Hero from '../../components/QuoteComponents/Hero/Hero.jsx'
// import ChooseYourInsuranceToday from '../../components/QuoteComponents/ChooseYourInsuranceToday/ChooseYourInsuranceToday.jsx'
// import InsuranceFeatures from '../../components/QuoteComponents/InsuranceFeatures/InsuranceFeatures.jsx'
// import AvailablePlansOnOffer from '../../components/QuoteComponents/AvailablePlansOnOffer/AvailablePlansOnOffer.jsx'
// import OptionalExtras from '../../components/QuoteComponents/OptionalExtras/OptionalExtras.jsx'
// import FrequentlyAskedQuestions from '../../components/QuoteComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions.jsx'
import Footer from '../../components/QuoteComponents/Footer/Footer.jsx'
import styles from './Success.module.css'

const Success = ({quoteData}) => {
  console.log(quoteData);
  return (
    <div>
    {/* <Navbar /> */}
    <ThankYou />
    <LookingForSomethingElse />
    <Footer />
  </div>
  )
}

export default Success