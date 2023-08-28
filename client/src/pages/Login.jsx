import backgroundImage from '../assets/login-images/background-image.jpg'
import '../css/Login.css'

export const Login = () => {
  return (
    <div className='main-container'>
            <div className='image-container'>
                <img src={backgroundImage} className="fit-screen-height" alt="img" />
            </div>
            <div className='login-container'>
                <h2>Welcome Back!</h2>
                <p>Track Your Expenses with Xpense Tracker</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" placeholder="example@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder="•••••••••••" className="form-control" id="exampleInputPassword1" />
                        <div className="form-check my-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember Me
                            </label>
                            <a className="forgot-pass" href="#">Forgot Password?</a>
                        </div>

                    </div>
                    <div className="d-grid gap-2 my-4">
                        <button type="submit" className="btn btn-dark">Sign In</button>
                    </div>
                    <div className='create-account'>
                        <p>Not a user?</p>
                        <a href="">Create Account</a>
                    </div>
                </form>
            </div>
        </div>
  )
}
