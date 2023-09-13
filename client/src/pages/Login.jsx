import Background from '../assets/login-images/Background.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Left Half: Image */}
        <div className='col-md-6 p-0'>
          <img
            src={Background}
            className='img-fluid'
            alt='Background'
            style={{ height: "92vh", width: "100%" }}
          />
        </div>

        {/* Right Half: Login Form */}
        <div className='col-md-6 p-0 d-flex align-items-center'>
          <div className='container bg-primary text-white'>
            <div
              className='row justify-content-center align-items-center'
              style={{ height: "92vh" }}
            >
              <div className='col-md-8 mt-5'>
                <h2 className='text-start display-6' style={{ fontWeight: "400" }}>
                  Welcome Back!
                </h2>
                <p className='text-start h6' style={{fontSize: "18px"}}>
                  Track Your Expenses with Xpense Tracker
                </p>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3 mt-4'>
                    <label
                      htmlFor='exampleInputEmail1'
                      className='form-label text-dark h6'
                      style={{fontSize: "18px"}}
                    >
                      Email address
                    </label>
                    <input
                      type='email'
                      name='email'
                      placeholder='example@gmail.com'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                    />
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='exampleInputPassword1'
                      className='form-label text-dark h6'
                      style={{fontSize: "18px"}}
                    >
                      Password
                    </label>
                    <div className='input-group'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='•••••••••••'
                        className='form-control'
                        id='exampleInputPassword1'
                      />
                      <button
                        type='button'
                        className='btn btn-outline-white bg-white text-dark'
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <i className='bi bi-eye-slash-fill'></i>
                        ) : (
                          <i className='bi bi-eye-fill'></i>
                        )}
                      </button>

                    </div>
                  </div>
                  <div className='d-grid gap-2 mt-4'>
                    <button type='submit' className='btn btn-dark h6' style={{fontSize: "18px"}}>
                      Sign In
                    </button>
                  </div>
                  <div className='create-account text-center mt-3' style={{fontSize: "18px"}}>
                    <p>
                      Not a user? {"   "}
                      <Link to='/register' className='text-white'>
                        Create Account
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
