import React from 'react';
import { Typography, Container } from '@mui/material';
import {motion} from 'framer-motion';
const Contact: React.FC = () => {
    return (

        <Container style={{"paddingTop": "100px"}}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <Typography variant="h2" gutterBottom>
                    Контакты
                </Typography>
                <Typography variant="body1">
                    Свяжитесь с нами по электронной почте: events@university.com
                </Typography>
            </motion.div>
        </Container>
);
};

export default Contact;