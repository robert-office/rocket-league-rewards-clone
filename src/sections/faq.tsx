import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled, Typography } from '@mui/material';
import { useState } from 'react';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: 'transparent',


    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',

    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: 'rgb(248 133 16)'
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(270deg)',
        color: 'rgb(248 133 16)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: '15px',
        backgroundColor: 'transparent',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    marginLeft: '30px',
}));

export const Faq = () => {

    const [expanded, setExpanded] = useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <section className="w-full bg-gradient-to-b from-faq to-black pt-20 pb-10 space-y-10">

            <p className="w-full text-center text-primary font-fa text-2xl font-extrabold">F.A.Q.</p>

            <div className='w-full sm:px-40'>

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <p className="w-full text-primary font-fa text-xl font-normal">F.A.Q.</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="w-full text-primary font-fa text-lg font-extralight">EARNING FAN REWARDS IS AS SIMPLE AS LINKING YOUR TWITCH ACCOUNT TO YOUR ROCKET LEAGUE PLATFORM ACCOUNT OF CHOICE. THEN TUNE INTO OFFICIAL ROCKET LEAGUE BROADCASTS TO RECEIVE RANDOM FAN REWARDS THROUGHOUT THE EVENT!</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <p className="w-full text-primary font-fa text-xl font-normal">HOW DO I EARN FAN REWARDS</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="w-full text-primary font-fa text-lg font-extralight">FAN REWARDS ARE NOW TIME-BASED. EACH FAN REWARD CAMPAIGN WILL REQUIRE A CERTAIN AMOUNT OF WATCH TIME BEFORE THE FAN REWARD IS EARNED. MAKE SURE TO TRACK YOUR PROGRESS IN THE TWITCH ACCOUNT PANEL!</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <p className="w-full text-primary font-fa text-xl font-normal">HOW DO I KNOW IF I EARNED A FAN REWARD WHILE WATCHING AN OFFICIAL ROCKET LEAGUE BROADCAST?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="w-full text-primary font-fa text-lg font-extralight">YOU WILL RECEIVE A NOTIFICATION ON TWITCH WHEN YOU RECEIVE A FAN REWARD. THE NOTIFICATION WILL TELL YOU WHAT FAN REWARD SUITE YOU RECEIVED. THE ITEM WILL BE ADDED TO YOUR INVENTORY THE NEXT TIME YOU LOG INTO ROCKET LEAGUE.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <p className="w-full text-primary font-fa text-xl font-normal">WHAT BROADCASTS HAVE FAN REWARDS ENABLED?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="w-full text-primary font-fa text-lg font-extralight">OFFICIAL RLCS AND CRL BROADCASTS WILL HAVE FAN REWARDS ON THE ROCKET LEAGUE TWITCH CHANNEL. IN ADDITION, SELECT THIRD-PARTY BROADCASTS MAY ALSO HAVE FAN REWARDS ENABLED.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <p className="w-full text-primary font-fa text-xl font-normal">ARE FAN REWARDS TRADABLE?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="w-full text-primary font-fa text-lg font-extralight">YES! FAN REWARDS ARE TRADABLE TO OTHER PLAYERS.</p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}