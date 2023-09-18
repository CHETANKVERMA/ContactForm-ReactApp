import React from 'react'
import styles from "../FormInBody/FormInBody.module.css"
import Buttons from '../Buttons/Buttons'
import {SiGooglemessages} from "react-icons/si"
import {BsFillTelephoneFill} from "react-icons/bs"

const FormInBody = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.form}`}>  
        <Buttons text="VIA CHAT SUPPORT " icon={<SiGooglemessages/>} />
        <Buttons text="VIA CALL  " icon={<BsFillTelephoneFill/>} />
        
        
        </div>
     
        
        <div className='imgInForm'>ccd</div>


    </div>
  )
}

export default FormInBody