import React from 'react'
import style from "./Section.module.css"
import CardLayout from '../CardLayout/CardLayout'
import GridLayout from "../GridLayout/GridLayout"
import ClientCard from '../ClientCard/ClientCard'
import Teamcard from '../TeamCard/Teamcard'
const Section = () => {
  return (
    <div className={style.section}>
        <div className={style.intro}>
            <h1 className={style.item}>Let's introduce ourself</h1>
            <div className={style.item}>
                <h2>
                    Criminal Lawyer
                </h2>
                <p className={style.sectionpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.
                </p>
            </div>
        </div>
        <CardLayout/>
        <GridLayout/>
        <ClientCard/>
        <Teamcard/>
        
    </div>
  )
}

export default Section