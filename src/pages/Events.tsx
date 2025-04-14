import React from 'react';
import { Container, Grid } from '@mui/material';
import EventCard from '../components/EventCard';
import { events } from '../data/Data.ts';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const Events: React.FC = () => {
    return (
        <StyledContainer style={{"paddingTop": "100px"}}>
            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid item key={event.id} xs={12} sm={6} md={4}>
                        <EventCard event={event} />
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    );
};

export default Events;