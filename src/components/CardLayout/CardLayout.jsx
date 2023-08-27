import React from 'react'
import style from "./CardLayout.module.css"
import CardItem from '../Card/CardItem'
import gift from "../../assets/gift.png";
const CardLayout = () => {
  return (
    <div className={style.cardLayout}>
        <p className={style.text}>Why Choose us?</p>
        <div className={style.card}>
        <CardItem thumb={gift} name={"98% Success rate"}/>
        <CardItem thumb={gift} name={"100% Success rate"}/>
        <CardItem thumb={gift} name={"100% Success rate"}/>
        </div>
   
        
    </div>
  )
}

export default CardLayout