import React from 'react'
import styles from './ChoosePlan.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import bluecheck from '../../../images/blue-check.png'
import greycheck from '../../../images/grey-check.png'
import wrench from '../../../images/wrench.png';
import briefcase from '../../../images/briefcase.png';
import creditcard from '../../../images/credit-card.png';
import dots from '../../../images/dots.png'

const ChoosePlan = ({ setStep, data, setData, handleSubmit }) => {
  const [plan, setPlan] = useState(2);
  const excessOptions = [100, 300, 500, 1000, 2000];
  const [excess, setExcess] = useState(500);
  const valueOptions = [4000, 9000, 15000];
  const [value, setValue] = useState(9000);
  
  const extras = [
    { name: "breakdown", number: '1', image: wrench, description: "Add Mechanical Breakdown", price: "not more than $5 /month"},
    { name: "asset", number: '2', image: briefcase, description: "Add Guaranteed Asset Protection", price: "not more than $3 /month" },
    { name: "guaranteed", number: '3', image: creditcard, description: "Guaranteed asset protection", price: "not more than $4 /month" }
  ]

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
    <>
    <div className={styles.Title}>Choose your plan</div>
    <div className={styles.InputSection}>  
      <div className={styles.PlanCardContainer}>
        <div className={styles.PlanCardBack}>
            <div className={styles.CardTitle}>Third Party, Fire & Theft</div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck}/>
              </div>
              <div className={styles.ItemTextActive}>
                One event, one excess
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Damage to others
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Fire damage
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Accidental loss
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={greycheck} />
              </div>
              <div className={styles.ItemTextActive} style={{ color: "#C0C1C1" }}>
                Damage to your car
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={greycheck} />
              </div>
              <div className={styles.ItemTextActive} style={{ color: "#C0C1C1" }}>
                Towing
              </div>
            </div>
          <div className={styles.Price}>$45</div>
          <div className={plan === 1 ? styles.ActiveButton : styles.Button} onClick={() => { setPlan(1); setData({ ...data, plan: 1 }) }}>Select Plan</div>
        </div>
        <div className={styles.PlanCardFront}>
          <div className={styles.CardTitle} style={{width: '13rem'}}>Comprehensive Everyday Plan</div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck}/>
              </div>
              <div className={styles.ItemTextActive}>
                One event, one excess
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Damage to others
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Fire damage
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Accidental loss
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Damage to your car
              </div>
            </div>
            <div className={styles.CardItem}>
              <div className={styles.Checkmark}>
                <img src={bluecheck} />
              </div>
              <div className={styles.ItemTextActive}>
                Towing
              </div>
            </div>
            <div className={styles.Price} style={{ marginTop: "40px" }}>$55</div>
            <div style={{ marginBottom: '2rem'}}>Pay $140/year Save $20</div>
          <div className={plan === 2 ? styles.ActiveButton : styles.Button} onClick={() => { setPlan(2); setData({ ...data, plan: 2 }) }}>Select Plan</div>
        </div>
        <div className={styles.PlanCardBack}>
          <div className={styles.CardTitle}>Third Party Only</div>
          <div className={styles.CardItem}>
            <div className={styles.Checkmark}>
              <img src={bluecheck}/>
            </div>
            <div className={styles.ItemTextActive}>
              One event, one excess
            </div>
          </div>
          <div className={styles.CardItem}>
            <div className={styles.Checkmark}>
              <img src={bluecheck} />
            </div>
            <div className={styles.ItemTextActive}>
              Damage to others
            </div>
          </div>
          <div className={styles.CardItem}>
            <div className={styles.Checkmark}>
              <img src={greycheck} />
            </div>
              <div className={styles.ItemTextActive} style={{ color: "#C0C1C1" }}>
              Fire damage
            </div>
          </div>
          <div className={styles.CardItem}>
            <div className={styles.Checkmark}>
              <img src={greycheck} />
            </div>
              <div className={styles.ItemTextActive} style={{ color: "#C0C1C1" }}>
              Accidental loss
            </div>
          </div>
          <div className={styles.CardItem}>
            <div className={styles.Checkmark}>
              <img src={greycheck} />
            </div>
            <div className={styles.ItemTextActive} style={{ color: "#C0C1C1" }}>
              Damage to your car
            </div>
          </div>
          <div className={styles.CardItem}>
            <div className={styles.Checkmark}>
              <img src={greycheck} />
            </div>
            <div className={styles.ItemTextActive} style={{ color: "#C0C1C1" }}>
              Towing
            </div>
          </div>
        <div className={styles.Price}>$25</div>
        <div className={plan === 3 ? styles.ActiveButton : styles.Button} onClick={() => { setPlan(3); setData({ ...data, plan: 3 }) }}>Select Plan</div>
        </div>
      </div>
      <div className={styles.SliderCard}>
        <div className={styles.SliderTitle}>Choose your policy excess</div>
          <div className={styles.SliderGlove}>
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
      </div>
      <div className={styles.SliderCard}>
        <div className={styles.SliderTitle}>How much is your car valued?</div>
        <div className={styles.SliderGlove}>
          <div className={styles.ActiveValueSliderLine}></div>
          <div className={value === 9000 || value === 15000 ? styles.ActiveValueSliderLine : styles.ValueSliderLine}></div>
          <div className={value === 15000 ? styles.ActiveValueSliderLine : styles.ValueSliderLine}></div>
          <div className={styles.ValueSliderLine}></div>
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
      </div>
      <div className={styles.CheckboxCard}>
        <div className={styles.SliderTitle} style={{ margin: "0px 0 0px 0" }}>Add these smart extras</div>
        <ul className={styles.ExtrasList}>
          {extras.map((extra, index) => {
            return (
              <li key={index}>
                <div className={styles.ListItemStart}>
                  <input type="checkbox" className={styles.Checkbox} id={`extras-checkbox${index}`} name={extra.name}
                    checked={checkedState[index]} onChange={() => { handleExtrasChange(index) }}
                  />
                  <div>{extra.number}</div>
                  <div><img src={extra.image}/></div>
                  <div className={styles.Description}>{extra.description}</div>
                  <div>{extra.price}</div>
                </div>
                <div className={styles.ListItemEnd}>
                  <div><img src={dots} /></div>
                  <div>learn more</div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className={styles.ButtonLine}>
          <div className={styles.Button} onClick={() => setStep((prev) => prev - 1)}>Back</div>
          <Link to={"/summary"} className={styles.ActiveButton} onClick={() => handleSubmit()}>Next</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChoosePlan