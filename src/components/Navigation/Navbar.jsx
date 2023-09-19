import React from 'react'
import styles from "../../components/Navigation/Navbar.module.css"




const navbar = () => {
  
  return (
    <nav className={`${styles.navigation} `}>
      <div className="iconNavbar">
        <img src="TATA_1mg_Logo.svg.png" alt='logo' className={styles.headIcon}/>
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