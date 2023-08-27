import React from 'react'
import CardItem from '../Card/CardItem'
import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import person3 from "../../assets/person3.png"
import style from "./ClientCard.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ClientCard = () => {
  return (
    <div className={style.clientCard}>
        <div className={style.heading}>
            <h1 className={style.text}>What says our happy Clients</h1>
            <div className={style.btncontainer}>
            <button className={style.btn}><ArrowBackIcon/></button>
            <button className={style.btn}><ArrowForwardIcon/></button>
            </div>
            
        </div>
        <div className={style.person}>
            <CardItem thumb={person1} client={true} name={"Jane Cooper"}/>
            <CardItem thumb={person2} client={true} name={"Devon Lane"}/>
            <CardItem thumb={person3} client={true} name={"Robert Fox"}/>
        </div>
    </div>
  )
}

export default ClientCard