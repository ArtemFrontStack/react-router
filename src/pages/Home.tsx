import React from 'react';
import {Typography, Container} from '@mui/material';
import {motion} from 'framer-motion';

const Home: React.FC = () => {
    return (
        <Container style={{"paddingTop": "100px"}}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <Typography variant="h2" gutterBottom>
                    Добро пожаловать на сайт мероприятий ВУЗА
                </Typography>
                <Typography variant="body1">
                    Здесь вы найдете информацию о предстоящих мероприятиях, конференциях и других событиях.
                </Typography>
            </motion.div>
        </Container>
    );
};

export default Home;