import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home','About','Skills','Services','Projects','Contact'];

  return (
    <nav>
      <div className="nav-container container">
        <div className="logo">Spandana Yaganti</div>
        <ul>
          {links.map(link => (
            <li key={link}>
              <Link to={link.toLowerCase()} smooth={true} duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </div>
      {open && (
        <ul className="mobile-menu" style={{background:'#fff', textAlign:'center'}}>
          {links.map(link => (
            <li key={link} style={{padding:'1rem 0'}}>
              <Link to={link.toLowerCase()} smooth={true} duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
