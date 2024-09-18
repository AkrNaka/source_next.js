import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-teal-600 shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-white text-2xl font-semibold">
                    <Link href="/">MethodPlus</Link>
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">Home</Link>
                    <Link href="/about" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">About</Link>
                    <Link href="/contact" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">Contact</Link>
                    <Link href="/todo" className="text-white hover:bg-teal-500 px-3 py-2 rounded transition duration-300">ToDoアプリ</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
