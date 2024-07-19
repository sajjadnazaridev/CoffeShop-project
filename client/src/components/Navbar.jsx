import { Link, NavLink } from 'react-router-dom';
import { navLinks } from "../constants";
import { logo } from "../assets";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5">
      <div className="container-left-nav w-1/2 flex justify-between items-center">
        <div className="container-logo">
          <Link to="/">
            <img src={logo} className='w-14 h-14' alt="logo coffee shop" />
          </Link>
        </div>

        <div className="container-profile-and-cart flex items-center">
          <Link to="/profile">
            <i className="ri-user-line mr-2"></i>
          </Link>

          <Link to="/cart">
            <i className="ri-shopping-cart-line"></i>
          </Link>
        </div>
      </div>

      <div className="container-right-nav w-1/2">
        <div className="container-menu font-Leiko">
          <ul className="flex items-center justify-evenly">
            {navLinks.map((link) => (
              <li key={link.id} className="m-5">
                <NavLink to={link.link}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;