import React from 'react'
import styles from "../../components/Navigation/Navbar.module.css"

import icon1 from "../../images/iconNavbar.png"



const navbar = () => {
  
  return (
    <nav className={`${styles.navigation} `}>
      <div className="iconNavbar">
        <img src={icon1} alt='logo'/>
      </div>

      <ul>
        <li className={`${styles.navOnHover} `}>Home</li>
        <li className={`${styles.navOnHover} `}>About</li>
        <li className={`${styles.navOnHover} `}>Contact</li>

      </ul>

    </nav>
  )
}

export default navbar