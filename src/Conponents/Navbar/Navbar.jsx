import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className="nav-contact">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
