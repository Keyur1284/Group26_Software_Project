import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import RadioButtons from "../components/RadioButtons";
import '../css/Register.css'
import p_1 from '../assets/registration-images/p_1.jpg'


const USER_REGEX = /^[A-z][A-z0-9\s-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;
const REGISTER_URL = "/register";

export const Register = () => {


  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [selectedOption, setSelectedOption] = useState('Employee');

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirm_pwd, setShowconfirm_pwd] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleconfirm_pwdVisibility = () => {
    setShowconfirm_pwd(!showconfirm_pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    console.log({
      user: user,
      email: e.target.email.value,
      password: pwd,
      role: selectedOption
    });
  };

  return (
    <div className="container-fluid m-0 p-0">
        <section className="f d-flex flex-row p-0 align-items-start"  style={{height: "100vh"}}>
          <div className='col-md-6 p-0'>
            <img
              src={p_1}
              className='img-fluid'
              alt='Background'
              style={{ height: "100vh", width: "100%" }}
            />
          </div>

          <div className='col-md-6 p-0 d-flex align-items-center'>
          <div className='container text-white' style={{backgroundColor: "rgb(93, 150, 241)", width: "75vh"}}>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1 className='reg text-white  display-6' style={{ fontWeight: "400" }}>Create New Account</h1>
              <form className="f1 " style={{ fontSize: "18px" }} onSubmit={handleSubmit}>

                <label htmlFor="username" className="h6 mt-2">
                  Username:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validName ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validName || !user ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="text"
                  className='form-control form-input-text'
                  placeholder="Username"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens, allowed.
                </p>

                <div className='mt-4'>
                  <label
                    htmlFor='exampleInputEmail1'
                    className='form-label h6'
                    
                  >
                    Email address:
                  </label>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='example@gmail.com'
                      className='form-control form-input-text'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>

                <div className='mt-4'>

                  <label htmlFor="password" className="h6">
                    Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validPwd || !pwd ? "hide" : "invalid"}
                    />
                  </label>
                  <div className='input-group'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className='form-control form-input-text'
                      id='exampleInputPassword1'
                      placeholder='•••••••••••'
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
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

                  <p
                    id="pwdnote"
                    className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                    <span aria-label="asterisk">*</span>
                  </p>
                </div>

                <div className='mt-4'>

                  <label htmlFor="confirm_pwd" className="h6">
                    Confirm Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    />
                  </label>

                  <div className='input-group'>

                    <input
                      type={showconfirm_pwd ? 'text' : 'password'}
                      id="confirm_pwd"
                      name="password"
                      className='form-control form-input-text'
                      placeholder='•••••••••••'
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />

                    <button
                      type='button'
                      className='btn btn-outline-white bg-white text-dark'
                      onClick={toggleconfirm_pwdVisibility}
                    >
                      {showconfirm_pwd ? (
                        <i className='bi bi-eye-slash-fill'></i>
                      ) : (
                        <i className='bi bi-eye-fill'></i>
                      )}
                    </button>

                  </div>

                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>

                </div>

                <div className="radiobtn mb-3">
                <RadioButtons selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                </div>

                <button type="submit" id="submit-btn"
                  className="btn btn-dark"
                  disabled={!validName || !validPwd || !validMatch ? true : false}
                >
                  Sign Up
                </button>

                <div className='text-center text-white mt-3' style={{fontSize: "18px"}}>
                    <p>
                      Already registered? {"   "}
                      <Link to='/login' className='text-white'>
                        Sign In
                      </Link>{" "}
                    </p>
                  </div>

              </form>
              


            </div>

          </div>
        </section>
    </div>
  );
};

export default Register;