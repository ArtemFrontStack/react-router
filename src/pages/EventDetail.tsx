import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { events } from '../data/Data.ts';
import { motion } from 'framer-motion';

const EventDetail: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const event = events.find((e) => e.id === eventId);

    if (!event) {
        return <Typography variant="h4">Мероприятие не найдено</Typography>;
    }

    return (

        <Container style={{"paddingTop": "100px"}}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                whileHover={{scale: 1.05}}>
                <Typography variant="h2" gutterBottom>
                    {event.title}
                </Typography>
                <Typography variant="body1">{event.description}</Typography>
                <Typography variant="body2">{event.date}</Typography>
                <Typography variant="body2">{event.location}</Typography>
            </motion.div>
        </Container>

)
    ;

};

export default EventDetail;