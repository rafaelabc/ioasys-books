import React from 'react';
import { useAuth } from '../../contexts/auth';

function Books() {
    const context = useAuth();

    async function handleLogout() {
        context.Logout();
    }

    return (
        <div>
            <h1>Books</h1>
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
export default Books;
