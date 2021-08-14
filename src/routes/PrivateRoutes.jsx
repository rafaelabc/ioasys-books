import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Books from '../views/Books';

function PrivateRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Books} />
            </Switch>
        </BrowserRouter>
    );
}
export default PrivateRoutes;
