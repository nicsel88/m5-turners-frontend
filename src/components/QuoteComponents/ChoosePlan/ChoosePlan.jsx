import React from 'react'
import styles from './ChoosePlan.module.css'
import {useState} from 'react'

const ChoosePlan = ({ setStep, data, setData, handleSubmit }) => {
  const [plan, setPlan] = useState(2);
  const excessOptions = [100, 300, 500, 1000, 2000];
  const [excess, setExcess] = useState(500);
  const valueOptions = [4000, 9000, 15000];
  const [value, setValue] = useState(9000);
  const extras = ["breakdown", "asset", "guaranteed"]
  const [checkedState, setCheckedState] = useState(
    new Array(extras.length).fill(false)
  )

  const handleExtrasChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setData({ ...data, extras: updatedCheckedState });
   }


  return (
    <div className={styles.InputSection}>
      <div className={styles.PlanCardContainer}>
        <div className={styles.PlanCard}>
          <div className={plan === 1 ? styles.ActiveButton : styles.Button} onClick={() => { setPlan(1); setData({ ...data, plan: 1 }) }}>Plan 1</div>
        </div>
        <div className={styles.PlanCard}>
          <div className={plan === 2 ? styles.ActiveButton : styles.Button} onClick={() => { setPlan(2); setData({ ...data, plan: 2 }) }}>Plan 2</div>
        </div>
        <div className={styles.PlanCard}>
          <div className={plan === 3 ? styles.ActiveButton : styles.Button} onClick={() => { setPlan(3); setData({ ...data, plan: 3 }) }}>Plan 3</div>
        </div>
      </div>
      <div className={styles.SliderCard}>
        <div className={styles.ExcessSliderLine}></div>
        <div className={styles.CirclesContainer}>
          {excessOptions.map((option, index) => {
            return (
            <div className={excess === option ? styles.ActiveCircle : styles.Circle} key={index}
              onClick={() => { setExcess(option); setData({ ...data, excess: option }) }}>
                <div className={styles.CircleText}>${option}</div>
            </div>
            );
          })}
        </div>
      </div>
      <div className={styles.SliderCard}>
        <div className={styles.ActiveValueSliderLine}></div>
        <div className={value === 9000 || value === 15000 ? styles.ActiveValueSliderLine : styles.ValueSliderLine}></div>
        <div className={value === 15000 ? styles.ActiveValueSliderLine : styles.ValueSliderLine}></div>
        <div className={styles.CirclesContainer}>
          {valueOptions.map((option, index) => {
            return (
              <div className={value === option ? styles.ActiveCircle : styles.Circle} key={index}
                onClick={() => { setValue(option); setData({ ...data, value: option }) }}>
                <div className={styles.CircleText}>${option}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.CheckboxCard}>
        <ul className={styles.ExtrasList}>
          {extras.map((extra, index) => {
            return (
              <li key={index}>
                <input type="checkbox" id={`extras-checkbox${index}`} name={extra}
                  checked={checkedState[index]} onChange={() => { handleExtrasChange(index) }}
                />
                <label htmlFor={`extras-checkbox${index}`}>{extra}</label>
              </li>
            )
          })}
        </ul>
        <div className={styles.ButtonLine}>
          <div className={styles.Button} onClick={() => setStep((prev) => prev - 1)}>Back</div>
          <div className={styles.Button} onClick={() => handleSubmit()}>Next</div>
        </div>
      </div>
    </div>
  )
}

export default ChoosePlan