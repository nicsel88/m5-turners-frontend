import React from 'react'
import FindYourCar from '../../components/QuoteComponents/FindYourCar/FindYourCar.jsx'
import Driver from '../../components/QuoteComponents/Driver/Driver.jsx'
import ChoosePlan from '../../components/QuoteComponents/ChoosePlan/ChoosePlan.jsx'
import { useState } from 'react'
import styles from './Quote.module.css'

const Quote = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    make: "", model: "", year: null, enginecap: null, business: true, address: "", startdate: "",
    d1firstname: "", d1lastname: "", d1gender: "female", d1birthday: "", d1incidents: true, d1licence: "", d1policyhold: '', email: "", phone: "",
    plan: '', excess: null, value: null, extras: []
  })
  
  console.log(data);

  

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const stepSwitch = (step) => {
    switch (step) {
      case 1:
        return <FindYourCar step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange}/>
      case 2: 
        return <Driver step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
      case 3: 
        return <ChoosePlan step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
      default:
        return <FindYourCar step={step} setStep={setStep} data={data} setData={setData} handleChange={handleChange}/>
    }
  }

  return (
    <div className={styles.QuoteContainer}>
          {stepSwitch(step)}
    </div>
  )
}

export default Quote