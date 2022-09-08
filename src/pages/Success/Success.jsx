import React from 'react'
import Navbar from '../../components/QuoteComponents/Header/Header.jsx'
import ThankYou from '../../components/QuoteComponents/ThankYou/ThankYou.jsx'
import LookingForSomethingElse from '../../components/QuoteComponents/LookingForSomethingElse/LookingForSomethingElse.jsx'
// import Hero from '../../components/QuoteComponents/Hero/Hero.jsx'
// import ChooseYourInsuranceToday from '../../components/QuoteComponents/ChooseYourInsuranceToday/ChooseYourInsuranceToday.jsx'
// import InsuranceFeatures from '../../components/QuoteComponents/InsuranceFeatures/InsuranceFeatures.jsx'
// import AvailablePlansOnOffer from '../../components/QuoteComponents/AvailablePlansOnOffer/AvailablePlansOnOffer.jsx'
// import OptionalExtras from '../../components/QuoteComponents/OptionalExtras/OptionalExtras.jsx'
// import FrequentlyAskedQuestions from '../../components/QuoteComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions.jsx'
import FooterSuccess from '../../components/QuoteComponents/FooterSuccess/FooterSuccess.jsx'
import styles from './Success.module.css'

const Success = ({quoteData}) => {
  return (
    <div>
    {/* <Navbar /> */}
    <ThankYou />
    <LookingForSomethingElse />
    <FooterSuccess />
  </div>
  )
}

export default Success