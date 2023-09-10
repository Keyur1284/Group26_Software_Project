import { Link } from 'react-router-dom';
import '../css/Homepage.css';

export const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
            <div className="container-md">
                <a className="text-decoration-none text-white link-secondary mx-2" href="#">XpenseTrackerLogo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex flex-row justify-content-between">
                <a className="text-decoration-none text-secondary link-light mx-2" href="#">Home</a>
                <a className="text-decoration-none text-secondary link-light mx-2" href="#">Purchase</a>
                <a className="text-decoration-none text-secondary link-light mx-2" href="#">Products</a>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-secondary link-light dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">User Guide</a></li>
                                <li><a className="dropdown-item" href="#">FAQs</a></li>
                                <li><a className="dropdown-item" href="#">Articles</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <form className="d-flex flex-row justify-content-end" role="search">
                <Link to='/login'><button className="custom-btn btn btn-sm btn-primary" id="log-in">Log in</button></Link>
                <Link to='/register'><button className="custom-btn btn btn-sm btn-secondary mx-2" id="sign-up">Sign Up</button></Link>
            </form>

        </div >
    )
}