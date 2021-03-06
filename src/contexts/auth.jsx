import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [authenticated, setAuthenticated] = useState(false);

    async function Login(email, password) {
        await api
            .post('/auth/sign-in', {
                email,
                password,
            })
            .then((response) => {
                setUser(response.data);

                const token = response.headers.authorization;
                const refreshToken = response.headers['refresh-token'];

                localStorage.setItem('user', response.data.name);
                localStorage.setItem('token', token);
                localStorage.setItem('refresh-token', refreshToken);

                api.defaults.headers.Authorization = `Bearer ${token}`;
                setAuthenticated(true);
            })
            .catch((error) => {
                throw error.response;
            });
    }

    function Logout() {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('refresh-token');

        api.defaults.headers.Authorization = undefined;
        setAuthenticated(false);
    }

    useEffect(() => {
        const storagedToken = localStorage.getItem('token');

        if (storagedToken) {
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
            setAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                user,
                Login,
                Logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
export default AuthContext;
