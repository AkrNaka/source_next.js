import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', textAlign: 'center' }}>
            <Link href="/" style={{ margin: '0 15px' }}>Home</Link>
            <Link href="/about" style={{ margin: '0 15px' }}>About</Link>
            <Link href="/contact" style={{ margin: '0 15px' }}>Contact</Link>
            <Link href="/todo" style={{ margin: '0 15px' }}>ToDo</Link> {/* ToDoリンク追加 */}
        </nav>
    );
};

export default Navbar;
