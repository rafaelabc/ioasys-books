import React, { useContext } from 'react';
import PublicRoutes from './PublicRoutes';
import AuthContext from '../contexts/auth';
import PrivateRoutes from './PrivateRoutes';

function Routes() {
    const { authenticated } = useContext(AuthContext);
    return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
}
export default Routes;
