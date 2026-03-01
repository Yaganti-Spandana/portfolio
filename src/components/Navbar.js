import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Spandana Yaganti</div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${open ? 'show' : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <Link
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
