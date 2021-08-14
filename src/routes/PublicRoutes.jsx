import { React } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../views/Login';

function PublicRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
export default PublicRoutes;
