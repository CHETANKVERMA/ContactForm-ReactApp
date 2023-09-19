import React from 'react'
import styles from "../Buttons/Buttons.module.css"


const Buttons = (props) => {
  return (
    <button className={props.conditionForButton ? styles.buttonBottom : styles.buttonTopTwo }>
       {props.icon}
       {props.text}
   
    </button>
  )
}

export default Buttons