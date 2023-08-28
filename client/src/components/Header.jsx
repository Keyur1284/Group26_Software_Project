import { Link } from 'react-router-dom';
import '../css/Homepage.css';

export const Header = () => {
  return (
    <div className="main-container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand nav-text" href="#">Xpense Trackr</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav-text" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Purchase</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Contact Us</a>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <Link to='/login'><button className="btn btn-primary" id="log-in">Log in</button></Link>
                        <Link to='/register'><button className="btn btn-secondary" id="sign-up">Sign Up</button></Link>
                    </form>

                </div>
            </div>
        </nav>
      </div>
  )
}
