import React from 'react';
import Box from '@mui/material/Box';
import { Route } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';


function LayoutRoute(props) {
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
}

export default LayoutRoute;