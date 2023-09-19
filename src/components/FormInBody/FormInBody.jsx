import React from "react";
import styles from "../FormInBody/FormInBody.module.css";
import Buttons from "../Buttons/Buttons";
import { SiGooglemessages } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const FormInBody = () => {
  
  // const[intialName,setInName]= useState("")
  // const[intialEmail,setInEmail]= useState("")
  // const[intialText,setInText]= useState("")

  
  const [name,setName] = useState("TATA 1mg");
  const [email,setEmail] = useState("care@1mg.com");
  const [text,setText] = useState("Your health our responsibility");

 



  const Submitting = (e) =>{
  e.preventDefault();
  setName(e.target[0].value);
  setEmail(e.target[1].value);
  setText(e.target[2].value);

  // setInEmail("");
  // setInName("");
  // setInText("");
  }

  return (
    <div className={styles.container}>
     
      <div className={styles.form}>
       
        <div className={styles.topButton}>
          {/* In icon we have kept tags intact because those are components that we imported */}
          <Buttons text="VIA CHAT SUPPORT " icon={<SiGooglemessages />}  />
          <Buttons text="VIA CALL " icon={<BsFillTelephoneFill />} />
        </div>

        <div className={styles.emailButton}>
          <Buttons text="VIA EMAIL" icon={<MdEmail />} conditionForButton={true}/>
        </div>

        <form onSubmit={Submitting} >
         
        <div className={styles.box}>
        <label htmlFor={styles.yourName}>Name</label>
        <input type='text' id ='yourName' name="nameBox" className={styles.inputsInsideForm}/>
        </div>

        <div className={styles.box}>
        <label htmlFor={styles.yourEmail}>Email</label>
        <input type='email' id ='youremail' name="emailBox" className={styles.inputsInsideForm}/>
        </div>

        <div className={styles.box}>
        <label htmlFor={styles.yourText}>Query</label>
        <textarea type='text' id ='yourName' name="textBox"/>
        </div>

        
        <div className={styles.submitButton}>
        <Buttons text="SUBMIT " />
        </div>
        
      </form>

      <div className={styles.lastTagofForm}>
        {name +" | " + email +" | " + text}
      </div>

      </div>
{/* ************If image is inside public folder it can also be inserted like this*********** */}
      <div className="imgInForm">
        <img src="iconBody.png"/>
      </div>

     
    </div>
  );
};

export default FormInBody;
