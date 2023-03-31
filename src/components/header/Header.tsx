import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/Rectangle48.png"
import { NavLink } from "react-router-dom";

interface Props {}

function Header(props: Props) {
   const {} = props

   return (
      <div className={styles.Header}>
         <img className={styles.logo} src={logo} alt="logo"/>
         <NavLink to="/home">Home</NavLink>
         <NavLink to="/people">Characters</NavLink>
      </div>
   )
}

export default Header
