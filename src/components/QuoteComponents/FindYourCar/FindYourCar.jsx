import React from 'react'
import styles from './FindYourCar.module.css'
import { useState, useRef } from 'react'
import axios from 'axios'

const FindYourCar = ({ setStep, data, setData, handleChange }) => {
  const [business, setBusiness] = useState(true)
  const [search, setSearch] = useState(true)
  const query = useRef()
  
  const handleSearch = async () => {
    const queryParams = query.current.value;

    try {
      await axios.get(`https://m5backend.azurewebsites.net/regosearch/${queryParams}`)
        .then((response) => {
          console.log(response.data);
          setData({ ...data, make: response.data.CarMake, model: response.data.CarModel, year: response.data.RegistrationYear, enginecap: response.data.EngineSize }); 
          setSearch(false);  
        });
    }
   catch (error) {
      console.log(error);
    }

  }

  return (
    <div className={styles.CarDetails}>
      <div className={styles.Title}>
        Find Your Car
      </div>
      <div className={styles.InputSection}>
        {search ? (
          <>
          <div className={styles.InputLine}>
            <label for="search">Enter your car registration number</label>
            <input
              type="text"
              placeholder="ABC123"
              className="infoInput"
              ref={query}
            />
          </div>
          <div className={styles.Button} onClick={() => handleSearch()}>Search</div>
          <span>Don't know your registration?</span>
          <span className={styles.ToggleSearch} onClick={() => setSearch(false)}>Enter your car's details</span>  
          </>
        ) : (
            <>
              <div className={styles.InputLine}>
                <label for="make">Make</label>
                <input
                  type="text"
                  placeholder="Toyota"
                  className="infoInput"
                  name="make"
                  onChange={handleChange}
                  value={data.make}
                />
              </div>
              <div className={styles.InputLine}>
                <label for="model">Model</label>
                <input
                  type="text"
                  placeholder="Prius"
                  className="infoInput"
                  name="model"
                  onChange={handleChange}
                  value={data.model}
                />
              </div>
              <div className="InputLine">
                <label for="year">Year</label>
                <input
                  type="text"
                  placeholder="2015"
                  className="infoInput"
                  name="year"
                  onChange={handleChange}
                  value={data.year}
                />
              </div>
              <div className={styles.InputLine}>
                <label for="enginecap">Engine Capacity</label>
                <input
                  type="number"
                  placeholder="1.3"
                  className="infoInput"
                  name="enginecap"
                  onChange={handleChange}
                  value={data.enginecap}
                />
              </div>
              <div>
                <span>Don't know these details?</span>
                <span className={styles.ToggleSearch} onClick={() => setSearch(true)}>Try entering vehicle registration</span>
              </div>  
          </>
        )}
          
      </div>
      <div className={styles.InputSection}>
        <div className={styles.InputLine}>
          <span>Will you use this car for business?</span>
          <div id="business" value={business}>
            <div className={business ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setBusiness(true); setData({ ...data, business: true }); }}>Yes</div>
            <div className={!business ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setBusiness(false); setData({ ...data, business: false }); }}>No</div>
          </div>
        </div>
        <div className={styles.InputLine}>
          <label for="address">What address is your car usually parked at?</label>
          <input
            type="text"
            placeholder="123 Sesame St."
            className={styles.InputLine}
            name="address"
            onChange={handleChange}
            value={data.address}
          />
        </div>
        <div className={styles.InputLine}>
          <label for="startdate">When do you want your policy to start?</label>
          <input
            type="date"
            className={styles.InputLine}
            name="startdate"
            onChange={handleChange}
            value={data.startdate}
          />
        </div>
        <div className={styles.ButtonLine}>
          <div className={styles.Button} onClick={() => setStep((prev) => prev + 1)}>Next</div>
        </div>
      </div>
    </div>
      

    
  )
}

export default FindYourCar