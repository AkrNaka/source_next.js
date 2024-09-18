import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
    title: 'next.js お試し',
    description: 'A single-page application using Next.js 13 with TypeScript',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja" className="h-full">
            <body className="min-h-screen flex flex-col m-0 p-0">
                <Navbar/>
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
