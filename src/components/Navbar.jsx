import { NavLink, Link } from 'react-router-dom';
import BrainImage from '../../src/assets/img.png';
import '../index.css';

const Navbar = () => {
  return (
      <header className="">
        <div className="flex justify-between items-center px-0 py-1000">
          {/* TITLE */}
          <div className="flex justify-left-align">
            <Link to="/" className="flex items-center">
              <img src={BrainImage} alt="Brain Logo" className="logo-image" />
              <p className="ml-4 text-3xl font-bold text-white">Brain Matter</p>
            </Link>
          </div>
          {/* Navigation Items */}
          <div className="flex gap-8 items-center">
            <NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink>
            <NavLink to="/about" activeClassName="active-link" className="nav-link">About</NavLink>
            <NavLink to="/forum" activeClassName="active-link" className="nav-link">Forum</NavLink>
            <NavLink to="/personalize" activeClassName="active-link" className="nav-link">Personalize</NavLink>
            <NavLink to="/brain" activeClassName="active-link" className="nav-link">Brain</NavLink>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
