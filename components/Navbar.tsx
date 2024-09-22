'use client'; // クライアントコンポーネントとしてマーク

import { useRouter } from 'next/navigation'; // ここを修正
import { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ user, setUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter(); // useRouterを使用

    const handleLogout = () => {
        localStorage.removeItem('user'); // ローカルストレージからユーザ情報を削除
        setUser(null); // ユーザ情報をnullに設定
        router.push('/login'); // ログインページにリダイレクト
        console.log('Logged out successfully');
    };

    return (
        <nav className="bg-teal-600 shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-white text-2xl font-semibold">
                    <Link href="/">MethodPlus</Link>
                </div>
                {user && (
                    <div className="text-white">
                        ログイン：{user.name}
                    </div>
                )}
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">Home</Link>
                    <Link href="/about" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">About</Link>
                    <Link href="/contact" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">Contact</Link>
                    <Link href="/todo" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">ToDoアプリ</Link>
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300"
                        >
                            Logout
                        </button>
                    )}
                </div>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-teal-600 px-4 py-2">
                    <Link href="/" className="block text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">Home</Link>
                    <Link href="/about" className="block text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">About</Link>
                    <Link href="/contact" className="block text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">Contact</Link>
                    <Link href="/todo" className="block text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">ToDoアプリ</Link>
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="block text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
