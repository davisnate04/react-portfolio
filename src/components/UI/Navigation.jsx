import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <div className="nav-container">
            <h1>davisnate04</h1>
            <ul className="nav-bar">
                <li className="nav-item">
                    <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                    About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/portfolio"
                    className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/contact"
                    className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/resume"
                    className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;