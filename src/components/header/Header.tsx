import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/Rectangle48.png"

interface Props {}

function Header(props: Props) {
   const {} = props

   return (
      <div className={styles.Header}>
         <img className={styles.logo} src={logo} alt="logo"/>
      </div>
   )
}

export default Header
