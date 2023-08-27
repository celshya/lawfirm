import React from 'react'
import style from "./NewsLetter.module.css"
const NewsLetter = () => {
  return (
    <div className={style.newsletter}>

        <div>
            <h1 className={style.text}>Subscribe Our Newsletter</h1>
        </div>
        <div className={style.items}>
            <input type="text" placeholder='Name:'/>
            <input type="email" placeholder='Enter your Email'/>
            <button className={style.btn}>SEND</button>
        </div>

    </div>
  )
}

export default NewsLetter