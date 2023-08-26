import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Pages from '../Pages/Pages'
import style from "./NavBar.module.css"
const NavBar = () => {
  return (
 <div className={style.nav}>
    <Logo/>
    <Pages/>
    <Button/>
 </div>
  )
}   

export default NavBar