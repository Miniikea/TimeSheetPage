import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';

const exampleTimeSheets = [
    {
        year: 2023,
        months: [
            {
                id: 11,
                name: "November",
                timesheetId: 1
            },
            {
                id: 12,
                name: "December",
                timesheetId: 2
            }
        ]
    },
    {
        year: 2024,
        months: [
            {
                id: 1, 
                name: "Janurary",
                timesheetId: 3
            },
            {
                id: 2, 
                name: "February",
                timesheetId: 4
            }
        ]
    }
]

export const Timesheets = (props) => {

    // accordion consts
    const [expanded, setExpanded] = useState(false);

    // function for handlding accordion expansion
    const handleAccordionExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    // other consts
    const [timesheets, setTimesheets] = useState(exampleTimeSheets);

    return(
        <Grid
          container
          direction="column"
          width="50%"
        >
            <Grid item>
                <Typography variant="h5">
                    <u>Existing Timesheets</u>
                </Typography>
            </Grid>
            <br/>
            {timesheets.map((y, i) => (
                <Accordion
                  key={`TimesheetsYearAccordion_${i}`}
                  expanded={expanded === `panel${i}`}
                  onChange={handleAccordionExpand(`panel${i}`)}
                  sx={{ marginBottom: 1, border: 1 }}
                >
                    <AccordionSummary>
                        <Grid 
                          container 
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                            <Grid item xs={8}><Typography variant="h6">{y.year}</Typography></Grid>
                            <Grid item xs={4}><Typography variant="p">Total Timesheets: {y.months.length}</Typography></Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container direction="column">
                            {y.months.map((m, j) => (
                                <Grid item key={`TimesheetsYear${i}Month${j}`}>
                                    <Typography variant="p">{m.name}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Grid>
    );
}