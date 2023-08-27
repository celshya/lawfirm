import React from 'react'
import style from "./Teamcard.module.css"
import Team from '../Team/Team'
import mem1 from "../../assets/mem1.png"
import mem2 from "../../assets/mem2.png"
import mem3 from "../../assets/mem3.png"
import mem4 from "../../assets/mem4.png"
import mem5 from "../../assets/mem5.png"
import mem6 from "../../assets/mem6.png"
const Teamcard = () => {
    const teamData = [
        { image: mem1, title: "Daniel Def", cases: 301 },
        { image: mem2, title: "Sanfole", cases: 850 },
        { image: mem3, title: "Cesforila", cases: 470 },
        { image: mem4, title: "Colleen", cases: 180 },
        { image: mem5, title: "Haldone", cases: 212 },
        { image: mem6, title: "Nick Jeo", cases: 350 }
      ];
  return (
    <div className={style.Teamcard}>
        <div>
            <h1 className={style.text}>Our Team</h1>
        </div>
        <div className={style.cards}>
        {teamData.map((teamMember, index) => (
          <Team
            key={index} 
            image={teamMember.image}
            title={teamMember.title}
            cases={teamMember.cases}
          />
        ))}

        </div>
        
    </div>
  )
}

export default Teamcard