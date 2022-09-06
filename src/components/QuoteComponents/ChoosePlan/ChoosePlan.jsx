import React from 'react'
import styles from './ChoosePlan.module.css'
import {useState} from 'react'

const ChoosePlan = ({ step, setStep, data, setData, handleChange }) => {
  const [plan, setPlan] = useState(2)
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
        
      </div>
    </div>
  )
}

export default ChoosePlan