import React from 'react'
import Header from '../../components/QuoteComponents/Header/Header.jsx'
import FindYourCar from '../../components/QuoteComponents/FindYourCar/FindYourCar.jsx'
import Driver from '../../components/QuoteComponents/Driver/Driver.jsx'
import ChoosePlan from '../../components/QuoteComponents/ChoosePlan/ChoosePlan.jsx'
import Footer from '../../components/QuoteComponents/Footer/Footer.jsx'
import { useState } from 'react'
import styles from './Quote.module.css'

const Quote = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    make: "",
    model: "",
    year: null,
    enginecap: null,
    business: true,
    address: "",
    startdate: "",
    d1firstname: "",
    d1lastname: "",
    d1gender: "female",
    d1birthday: "",
    d1incidents: true,
    d1licence: "",
    d1policyhold: '',
    email: "",
    phone: "",
    plan: '',
    excess: null,
    value: null,
    extras: [],
    quote: null,
  })

  console.log(data);



  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const stepSwitch = (step) => {
    switch (step) {
      case 1:
        return <FindYourCar step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
      case 2:
        return <Driver step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
      case 3:
        return <ChoosePlan step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
      default:
        return <FindYourCar step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
    }
  }

  return (
    <div className={styles.container}>
      
      <div className={styles['Header']}><Header /></div>
      <div className={styles['ProgressBar']}> hi </div>
      <div className={styles['main-card']}>{stepSwitch(step)}</div>
      <div className={styles['Footer']}><Footer /> </div>
      {/* <Navbar />
      
      <Footer /> */}
    </div>

  )
}

export default Quote