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
          <span>Will you use this car for business?</span>
          <div id="d1gender" value={gender}>
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
          <span>Incidents?</span>
          <div id="d1incidents" value={gender}>
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
        <div className={styles.ButtonLine}>
          <span>Add more drivers?</span><div className={styles.Button} onClick={() => setDriver2((prev) => !prev)}>+ Add Drivers</div>
        </div>
        {!driver2 && (
          <div className={styles.Infomercial}>Infomercial</div>
        )}
        {driver2 && (
          <>
            <div className={styles.Title}>
              Sedondary Driver
            </div>
            <div className={styles.InputSection}>
              <div className={styles.InputLine}>
                <label for="d2firstname">What is this driver's name?</label>
                <div className={styles.InputGroup}>
                  <input
                    type="text"
                    placeholder="First name"
                    className="infoInput"
                    name="d2firstname"
                    onChange={handleChange}
                    value={data.d1firstname}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="infoInput"
                    name="d2lastname"
                    onChange={handleChange}
                    value={data.d1lastname}
                  />
                </div>
              </div>
              <div className={styles.InputLine}>
                <span>Will you use this car for business?</span>
                <div id="d2gender" value={gender}>
                  <div className={gender === "female" ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setGender("female"); setData({ ...data, d1gender: 'female' }); }}>Female</div>
                  <div className={gender !== "female" ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setGender("male"); setData({ ...data, d1gender: 'male' }); }}>Male</div>
                </div>
              </div>
              <div className={styles.InputLine}>
                <label for="startdate">When do you want your policy to start?</label>
                <input
                  type="date"
                  className={styles.InputLine}
                  name="d2birthday"
                  onChange={handleChange}
                  value={data.d1birthday}
                />
              </div>
              <div className={styles.InputLine}>
                <span>Incidents?</span>
                <div id="d2incidents" value={gender}>
                  <div className={incidents ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setIncidents(true); setData({ ...data, d1incidents: true }); }}>Yes</div>
                  <div className={!incidents ? styles.OptionToggle1 : styles.OptionToggle2} onClick={() => { setIncidents(false); setData({ ...data, d1incidents: false }); }}>No</div>
                </div>
              </div>
              <div className={styles.InputLine}>
                <label for="d2license">License</label>
                <select id="d2license" name="d2license" onChange={handleChange}>
                  <option value={data.d1license}>L1</option>
                  <option value={data.d1license}>L2</option>
                  <option value={data.d1license}>L3</option>
                </select>
              </div>
              <div className={styles.ButtonLine}>
                <span>Add more drivers?</span><div className={styles.Button}>+ Add Drivers</div>
              </div>
            </div>
          </>
        )}
        <div className={styles.InputSection}>
          <span>Which drivers are policy holders?</span>
          <input type="checkbox" id="d1policyhold" name="d1policyhold" value="driver1" onChange={handleChange} />
          <label for="d1policyhold"> Driver 1</label>
          {driver2 && (
            <>
              <input type="checkbox" id="d2policyhold" name="d2policyhold" value="driver2" onChange={handleChange} />
              <label for="d1policyhold"> Driver 2</label><br></br>
            </>
          )}
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
          <div className={styles.Button} onClick={() => setStep((prev) => prev - 1)}>Back</div>
          <div className={styles.Button} onClick={() => setStep((prev) => prev + 1)}>Next</div>
        </div>
      </div>
    </div>
  )
}

export default Driver