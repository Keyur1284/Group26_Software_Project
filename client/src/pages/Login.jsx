import backgroundImage from '../assets/login-images/background-image.jpg'
import '../css/Login.css'
import { Link } from 'react-router-dom';


export const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email: e.target.email.value,
            password: e.target.password.value
        });
    }

  return (
    <div className='main-container'>
            <div className='image-container'>
                <img src={backgroundImage} className="fit-screen-height" alt="img" />
            </div>
            <div className='login-container mt-5'>
                <h2>Welcome Back!</h2>
                <p>Track Your Expenses with Xpense Tracker</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" placeholder="example@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-0">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name ="password" placeholder="•••••••••••" className="form-control" id="exampleInputPassword1" />
                        <div className="form-check my-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label my-0" htmlFor="flexCheckDefault">
                                Remember Me
                            </label>
                            <a className="forgot-pass" href="#">Forgot Password?</a>
                        </div>

                    </div>
                    <div className="d-grid gap-2 my-4">
                        <button type="submit" className="btn btn-dark">Sign In</button>
                    </div>
                    <div className='create-account'>
                        <p className='px-3'>Not a user?</p>
                        <Link to='/register'><a href="">Create Account</a></Link>
                    </div>
                </form>
            </div>
        </div>
  )
}
