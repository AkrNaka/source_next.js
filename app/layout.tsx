import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
    title: 'My SPA App',
    description: 'A single-page application using Next.js 13 with TypeScript',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
