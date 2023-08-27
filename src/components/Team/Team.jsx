import React from 'react'
import style from "./Team.module.css"
const Team = ({image,title,cases}) => {
  return (
    <div className={style.teamCard}>
    <img src={image} alt={title} width={68} height={68}/>
    <div className={style.content}>
        <h5 >{title}</h5>
        <p className={style.text}>{cases} cases</p>
    </div>

    </div>
  )
}

export default Team