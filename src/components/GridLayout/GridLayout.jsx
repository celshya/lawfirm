import React from 'react'
import style from "./GridLayout.module.css";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import business from "../../assets/Business law.png"
import partner from "../../assets/partnership.png"
import elder from "../../assets/elder.png"
import landlord from "../../assets/landlord.png"
import law from "../../assets/law.png"
import realestate from "../../assets/real estate.png"
const GridLayout = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    borderRadius:'15px',
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className={style.grid}>
      <p className={style.text}>Area of Practices</p>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item className={style.item}><img src={business} alt="business" />
          <Typography variant="h6" align="center" className={style.overlay}>BUSINESS LAW
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={style.item}><img src={partner} alt="partner" />
          <Typography variant="h6" align="center" className={style.overlay} >Partnership LAW
          </Typography></Item>
         
        </Grid>
        <Grid item xs={4}>
          <Item className={style.item}><img src={realestate} alt="realestate"/>
          <Typography variant="h6" align="center" className={style.overlay}>REAL ESTATE LAW
          </Typography></Item>
         
        </Grid>
        <Grid item xs={8}>
          <Item><img src={law} alt="law"/>
          <Typography variant="h6" align="center" className={style.overlay}>BUSINESS LAW
          </Typography></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><img src={landlord} alt="landlord"/>
          <Typography variant="h6" align="center" className={style.overlay}>LANDLORD DISPUTES
          </Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><img src={elder} alt="elder"/>
          <Typography variant="h6" align="center" className={style.overlay}>ELDER ABUSE
          </Typography></Item>
        </Grid>
      </Grid>
      </Box>

    </div>
  )
}

export default GridLayout