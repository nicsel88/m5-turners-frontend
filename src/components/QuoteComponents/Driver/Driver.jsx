import React from 'react'
import styles from './Driver.module.css'
import { useState } from 'react'

const Driver = ({ setStep, data, setData, handleChange }) => {
  const [gender, setGender] = useState('female');
  const [incidents, setIncidents] = useState(true);
  const [driver2, setDriver2] = useState(false);
  // const [d1policyhold, setD1Policyhold] = useState(false);
  // const [d2policyhold, setD2Policyhold] = useState(false);

  return (
    <div className={styles.DriverDetails}>
      <div className={styles.Title}>
        Main Driver
      </div>
      <div className={styles.InputSection}>
        <div className={styles.InputLine}>
          <label for="d1firstname">What is this driver's name?</label>
          <div className={styles.InputGroup}>
            <input
              type="text"
              placeholder="First name"
              className="infoInput"
              name="d1firstname"
              onChange={handleChange}
              value={data.d1firstname}
            />
            <input
              type="text"
              placeholder="Last name"
              className="infoInput"
              name="d1lastname"
              onChange={handleChange}
              value={data.d1lastname}
            />
          </div>
        </div>
        <div className={styles.InputLine}>
          <label>Gender?</label>
          <div id="d1gender" className={styles.ToggleOverlay} value={gender}>
            <div className={gender === "female" ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setGender("female"); setData({ ...data, d1gender: 'female' }); }}>Female</div>
            <div className={gender !== "female" ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setGender("male"); setData({ ...data, d1gender: 'male' }); }}>Male</div>
          </div>
        </div>
        <div className={styles.InputLine}>
          <label for="startdate">When do you want your policy to start?</label>
          <input
            type="date"
            className={styles.InputLine}
            name="d1birthday"
            onChange={handleChange}
            value={data.d1birthday}
          />
        </div>
        <div className={styles.InputLine}>
          <label className={styles.MultiLine}>In the last 5 years, have you had any incidents involving damage or theft of a vehicle?</label>
          <div id="d1incidents" className={styles.ToggleOverlay} value={gender}>
            <div className={incidents ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setIncidents(true); setData({ ...data, d1incidents: true }); }}>Yes</div>
            <div className={!incidents ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setIncidents(false); setData({ ...data, d1incidents: false }); }}>No</div>
          </div>
        </div>
        <div className={styles.InputLine}>
          <label for="d1license">License</label>
          <select id="d1license" name="d1license" onChange={handleChange}>
            <option value={data.d1license}>L1</option>
            <option value={data.d1license}>L2</option>
            <option value={data.d1license}>L3</option>
          </select>
        </div>
        <div className={styles.InputLine}>
          <label>Add more drivers?</label>
          <div className={styles.Button} onClick={() => setDriver2((prev) => !prev)}>+ Add Drivers</div>
        </div>
        {!driver2 && (
          <div className={styles.Infomercial}>
            <div>
              <span className={styles.InfomercialHeader}>Drivers under 25?<br /></span>
              <span>Tell us who they are. We’ll add them to your policy and let you know about any excesses that apply. Please remember there’s no cover for drivers aged under 25 who aren’t listed on your policy.</span>
            </div>
            <div>
              <span className={styles.InfomercialHeader}>Other drivers over 25?<br /></span>
              <span>There’s no need to add other licenced drivers over 25 who use the car with your permission. They’ll enjoy the same cover as you.</span>
            </div>
          </div>
        )}
        {driver2 && (
          <>
            <div className={styles.Title}>Secondary Driver</div>
            <div className={styles.InputSection}>
              <div className={styles.InputLine}>
                <label for="d1firstname">What is this driver's name?</label>
                <div className={styles.InputGroup}>
                  <input
                    type="text"
                    placeholder="First name"
                    className="infoInput"
                    name="d1firstname"
                    onChange={handleChange}
                    value={data.d1firstname}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="infoInput"
                    name="d1lastname"
                    onChange={handleChange}
                    value={data.d1lastname}
                  />
                </div>
              </div>
              <div className={styles.InputLine}>
                <label>Gender?</label>
                <div id="d1gender" className={styles.ToggleOverlay} value={gender}>
                  <div className={gender === "female" ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setGender("female"); setData({ ...data, d1gender: 'female' }); }}>Female</div>
                  <div className={gender !== "female" ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setGender("male"); setData({ ...data, d1gender: 'male' }); }}>Male</div>
                </div>
              </div>
              <div className={styles.InputLine}>
                <label for="startdate">When do you want your policy to start?</label>
                <input
                  type="date"
                  className={styles.InputLine}
                  name="d1birthday"
                  onChange={handleChange}
                  value={data.d1birthday}
                />
              </div>
              <div className={styles.InputLine}>
                <label className={styles.MultiLine}>In the last 5 years, have you had any incidents involving damage or theft of a vehicle?</label>
                <div id="d1incidents" className={styles.ToggleOverlay} value={gender}>
                  <div className={incidents ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setIncidents(true); setData({ ...data, d1incidents: true }); }}>Yes</div>
                  <div className={!incidents ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setIncidents(false); setData({ ...data, d1incidents: false }); }}>No</div>
                </div>
              </div>
              <div className={styles.InputLine}>
                <label for="d1license">License</label>
                <select id="d1license" name="d1license" onChange={handleChange}>
                  <option value={data.d1license}>L1</option>
                  <option value={data.d1license}>L2</option>
                  <option value={data.d1license}>L3</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.InputSection}>
        <div className={styles.InputLine}>
          <label>Which drivers are policy holders?</label>
        </div>
        <div className={styles.PolicyHolders}>
          <div>
            <input type="checkbox" id="d1policyhold" name="d1policyhold" value="driver1" onChange={handleChange} />
            <label for="d1policyhold">Driver 1  (the name entered before)</label>
          </div>
          <div>
            {driver2 && (
              <>
                <input type="checkbox" id="d2policyhold" name="d2policyhold" value="driver2" onChange={handleChange} />
                <label for="d1policyhold"> Driver 2</label><br></br>
              </>
            )}
          </div>
        </div>
        <div className={styles.InputLine}>
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="abc@gmail.com"
            className={styles.InputLine}
            name="email"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className={styles.InputLine}>
          <label for="phone">Phone number</label>
          <input
            type="text"
            placeholder="+64 123 4567"
            className={styles.InputLine}
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />
        </div>
      </div>
      <div className={styles.ButtonLine}>
        <div className={styles.Back} onClick={() => setStep((prev) => prev - 1)}>Back</div>
        <div className={styles.Next} onClick={() => setStep((prev) => prev + 1)}>Next</div>
      </div>
    </div>
  )
}

export default Driver