import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6, }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                МЕРОПРИЯТИЯ ВУЗА
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                © 2023 Все права защищены
            </Typography>
        </Box>
    );
};

export default Footer;