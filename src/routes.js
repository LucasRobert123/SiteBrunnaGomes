import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';

const Routes = () => (
    <BrowserRouter basename="/SiteBrunnaGomes">
        <Switch>
            <Route path="/" component={LandingPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;