import React from 'react'
import FindYourCar from '../../components/QuoteComponents/FindYourCar/FindYourCar.jsx'
import Driver from '../../components/QuoteComponents/Driver/Driver.jsx'
import ChoosePlan from '../../components/QuoteComponents/ChoosePlan/ChoosePlan.jsx'
import { useState } from 'react'
import styles from './Quote.module.css'
import axios from 'axios'

const Quote = ({ setQuoteData }) => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    make: "", model: "", year: null, enginecap: 2788, business: true, address: "", startdate: "",
    d1firstname: "", d1lastname: "", d1gender: "female", d1birthday: "YYYY-MM-DD", d1incidents: true, d1licence: "", d1policyhold: '', email: "", phone: "",
    plan: '', excess: 500, value: 9000, extras: []
  })
  
  // console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    
    await axios.post('http://localhost:8080/insurancequotecalculator', data)
      .then((response) => {
        setQuoteData(response.data)
      })
      .catch((error) => {console.log(error)})
  }

  const stepSwitch = (step) => {
    switch (step) {
      case 1:
        return <FindYourCar setStep={setStep} data={data} setData={setData} handleChange={handleChange}/>
      case 2: 
        return <Driver setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
      case 3: 
        return <ChoosePlan setStep={setStep} data={data} setData={setData} handleSubmit={handleSubmit} />
      default:
        return <FindYourCar setStep={setStep} data={data} setData={setData} handleChange={handleChange} />
    }
  }

  return (
    <div className={styles.QuoteContainer}>
          {stepSwitch(step)}
    </div>
  )
}

export default Quote