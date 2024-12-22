import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Modular AI web</h1>
      {/* Logo comes here */}
      <div className="flex space-x-5 text-xl">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

// WHere are these syles even being used?
// const styles = {
//   navbar: { display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#333', color: '#fff' },
//   logo: { fontSize: '1.5rem' },
//   links: { display: 'flex', gap: '1rem' },
// };

export default Navbar;
