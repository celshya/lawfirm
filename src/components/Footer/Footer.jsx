import React from 'react'
import style from "./Footer.module.css"
import NavBar from '../NavBar/NavBar'
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import Logo from '../Logo/Logo'
import Pages from '../Pages/Pages'
const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.nav}>
            <Logo/>
            <Pages/>
            <div className={style.icons}>
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaPinterest size={30} />
            <FaInstagram size={30} />

        </div>
        <div>

        </div>
        </div>
        <div className={style.copyrights}>
            <p> © 2020 Acme. All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
             

        </div>
       
    </div>
  )
}

export default Footer