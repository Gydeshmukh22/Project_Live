import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQs() {
    return (
        <div>
            <div className='faq'>
                <h1>Frequently Asked Questions</h1>
                <Accordion elevation={4}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id="panel1a-header">
                        <Typography>How can I use Google Fonts on my website?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Use the Google Fonts CSS API to embed the fonts directly on your website.
                    </AccordionDetails>
                </Accordion>
                <br />
                <Accordion elevation={4}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id="panel2a-header">
                        <Typography>How do I use Google Fonts in my Android app?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        See the article Get Started with the Google Fonts for Android.
                    </AccordionDetails>
                </Accordion>
                <br />
                <Accordion elevation={4}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel3a-content' id="panel3a-header">
                        <Typography>How do I use Material Symbols in my project?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Visit the Material Symbols guide.
                    </AccordionDetails>
                </Accordion>
            </div>


        </div>
    )
}

export default FAQs