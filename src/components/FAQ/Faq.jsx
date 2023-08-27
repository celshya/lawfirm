import React from 'react'
import style from "./Faq.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const Faq = () => {
  return (
    <div className={style.faqContainer}>
        <div>
            <h1 className={style.text}>FAQ</h1>
            <p className={style.content}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className={style.accord}>
                    <Accordion className={style.item}>
                    <AccordionSummary
                    expandIcon={
                        <div style={{width:"30px",height:"30px", backgroundColor: '#E3B748',borderRadius: '50%', padding: '4px' }}>
            <AddIcon style={{ color: 'black' }} />
          </div>

                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Do I need personal injury report?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={style.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={style.item}>
                    <AccordionSummary
                    expandIcon={
                        <div style={{width:"30px",height:"30px", backgroundColor: '#E3B748',borderRadius: '50%', padding: '4px' }}>
            <AddIcon style={{ color: 'black' }} />
          </div>

                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How much is my case worth?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={style.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={style.item}>
                    <AccordionSummary
                    expandIcon={
                        <div style={{width:"30px",height:"30px", backgroundColor: '#E3B748',borderRadius: '50%', padding: '4px' }}>
            <AddIcon style={{ color: 'black' }} />
          </div>

                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>What should I do right after car accidect</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={style.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={style.item}>
                    <AccordionSummary
                    expandIcon={
                        <div style={{width:"30px",height:"30px", backgroundColor: '#E3B748',borderRadius: '50%', padding: '4px' }}>
            <AddIcon style={{ color: 'black' }} />
          </div>

                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How much is my case worth? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={style.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
               
        </div>
    

    </div>
  )
}

export default Faq