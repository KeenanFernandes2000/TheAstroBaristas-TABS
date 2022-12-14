import React from 'react';
import Box from '@mui/material/Box';
import { Redirect, Route } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { UserContext } from './UserContext';


function LayoutRoute(props) {

    const {loggedIn} = UserContext;

    if (loggedIn) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <ResponsiveAppBar {...props}/>
                <Route path={props.path} exact={props.exact} component={props.component} />
                <Footer />
            </Box>
        )
    } else {
        return (
            <Redirect to={'/'} />
        )
    }
}

export default LayoutRoute;