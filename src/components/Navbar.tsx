import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    МЕРОПРИЯТИЯ ВУЗА
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Главная
                </Button>
                <Button color="inherit" component={Link} to="/events">
                    Мероприятия
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    О нас
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                    Контакты
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;