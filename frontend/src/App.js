// "Krishna's imports"
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LayoutRoute from './LayoutRoute';
// "Krishna's imports end"


function App() {
    return(
      //"krishna's code"
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
            </Switch>
        </BrowserRouter>
        //"krishna's code end "
    )
}

export default App;
