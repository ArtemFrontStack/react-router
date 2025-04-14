import React from 'react';
import { Typography, Container } from '@mui/material';
import {motion} from "framer-motion";

const About: React.FC = () => {
    return (

        <Container style={{"paddingTop": "100px"}}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <Typography variant="h2" gutterBottom>
                    О нас
                </Typography>
                <Typography variant="body1">
                    Мы - команда организаторов мероприятий в нашем вузе. Наша цель - создавать интересные и полезные
                    события для студентов и преподавателей.
                </Typography>
            </motion.div>
        </Container>
);
};

export default About;