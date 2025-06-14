import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navBar-link">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Favourite" className="nav-link">
          Favourite
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
