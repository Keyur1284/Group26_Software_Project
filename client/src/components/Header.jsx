import { Link } from 'react-router-dom';
import '../css/Homepage.css';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2" style={{fontSize: "18px"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Xpense Tracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Purchase</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Products</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link text-secondary link-light dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                        </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li>
                                    <Link className="dropdown-item" to="/">User Guide</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">Articles</Link>
                                </li>
                            </ul>
                        </li>
            
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">About Us</Link>
                        </li>
                    </ul>
                    <Link to='/login'><button className="btn btn-success mx-3" type="submit" style={{fontSize: "18px"}}>Login</button></Link>
                    <Link to='/register'><button className="btn btn-primary" type="submit" style={{fontSize: "18px"}}>Sign Up</button></Link>
                </div>
            </div>
        </nav>
    )
}