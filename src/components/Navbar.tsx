import Link from 'next/link';
import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="#home">HOME</Link>
        </li>
        <li>
          <Link href="#about">ABOUT</Link>
        </li>
        <li>
          <Link href="#projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="#contact">CONTRACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

