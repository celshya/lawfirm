import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import style from "./CardItem.module.css";

const CardItem = ({thumb,client,name}) => {

  return (
    <Card sx={{ maxWidth: 345 }} className={style.singleCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="101"
          width="101"
          image={thumb}
          alt="gift"
          class="left-image"
        />
        <CardContent>
          <Typography class={style.cardTitle}gutterBottom variant="h5" component="div">
           {name}

          </Typography>
          {client?(<p class={style.ceo}>Ceo of Hunt</p>):(<></>)}
          <Typography variant="body2" color="text.secondary" className={style.cardPara}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {!client?(<div className={style.contrastButton}>
                    Read More
                </div>):(<></>)}
      
      </CardActions>
    </Card>
  );


  
}

export default CardItem