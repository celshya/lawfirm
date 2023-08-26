import React from 'react'
import hero from "../../assets/hero-image.png"
import style from "./Hero.module.css"
import message from "../../assets/message.png"
const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.heroText}>
            <h1>You don’t have to Fight them Alone.</h1>
            <p className={style.heropara}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <div className={style.emailButton}>
                <div className={style.message}>
                    <img src={message} alt="message-icon" />
                    <p className={style.para}>Enter your email address</p>

                </div>
                <div className={style.contrastButton}>
                    Let's talk
                </div>
            </div>
        </div>
        <img src={hero} alt="hero" />
        
    </div>
  )
}

export default Hero