import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Event } from '../data/Data.ts';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <Card>
                <CardContent>
                    <Typography variant="h5">{event.title}</Typography>
                    <Typography>{event.description}</Typography>
                    <Typography>{event.date}</Typography>
                    <Typography>{event.location}</Typography>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default EventCard;