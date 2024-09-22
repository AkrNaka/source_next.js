'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import LoginPage from './login/page';

export default function RootLayout({ children }) {
    const [user, setUser] = useState(null);

    // localStorageからユーザ情報を取得
    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <html lang="ja" className="h-full">
            <body className="min-h-screen flex flex-col m-0 p-0">
                <Navbar user={user} setUser={setUser} />
                <main className="flex-1 overflow-auto px-4 sm:px-6 lg:px-8">
                    {user ? children : <LoginPage setUser={setUser} />}
                </main>
            </body>
        </html>
    );
}
