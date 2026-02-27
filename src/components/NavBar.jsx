import {Link} from "react-router-dom";
import "../css/Navbar.css"


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="nav-title">MOVIE FANATICS</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/favorites" className="nav-link">FAVORITES</Link>
        </div>
    </nav>
}

export default NavBar