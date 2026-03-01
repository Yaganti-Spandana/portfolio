import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <div className="logo">Spandana Yaganti</div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)} // close mobile menu if clicked
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
              onClick={() => setOpen(false)} // close menu after clicking
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        nav {
          position: fixed;
          width: 100%;
          background: #fff;
          z-index: 10;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links li {
          list-style: none;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #333;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          text-align: center;
          background: #fff;
        }

        .mobile-menu.show {
          display: flex;
        }

        .mobile-menu li {
          padding: 1rem 0;
          list-style: none;
        }

        /* Media Queries for Mobile */
        @media screen and (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
