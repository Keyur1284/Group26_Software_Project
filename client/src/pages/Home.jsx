import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';
import 'animate.css'
import p_1 from '../assets/dashboard-img/p_1.jpg';
import p_2 from '../assets/dashboard-img/p_2.jpg';
import p_3 from '../assets/dashboard-img/p_3.jpg';
import p_4 from '../assets/dashboard-img/p_4.jpg';


export const Home = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        const next = (activeSlide + 1) % 3;
        setActiveSlide(next);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => clearInterval(intervalId);
    }, [activeSlide]);

    return (
        <div className='text-white'>
             <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''} c-item animated fadeIn`}>
                        <img src={p_1} className="d-block w-100 c-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="container rounded-3 display-6 p-2" style={{ textShadow: "1px 1px #11303F", backgroundColor: "white", opacity: "75%", color: "#11303F" }}>
                                <p className="animate__animated animate__lightSpeedInRight text-uppercase" style={{ fontWeight: "bold" }}> Xpense Tracker </p>
                                <p className="animate__animated animate__lightSpeedInLeft">Empower Your Business, Track Expenses with Ease</p>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''} c-item animated fadeIn`}>
                        <img src={p_2} className="d-block w-100 c-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="container rounded-3 display-6 p-2" style={{ textShadow: "1px 1px #11303F", backgroundColor: "white", opacity: "75%", color: "#11303F" }}>
                                <p className="animate__animated animate__lightSpeedInRight text-uppercase" style={{ fontWeight: "bold" }}> Xpense Tracker </p>
                                <p className="animate__animated animate__lightSpeedInLeft">Simplify Expense Management, Amplify Your Success</p>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''} c-item animated fadeIn`}>
                        <img src={p_3} className="d-block w-100 c-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="container rounded-3 display-6 p-2" style={{ textShadow: "1px 1px #11303F", backgroundColor: "white", opacity: "75%", color: "#11303F" }}>
                                <p className="animate__animated animate__lightSpeedInRight text-uppercase" style={{ fontWeight: "bold" }}> Xpense Tracker </p>
                                <p className="animate__animated animate__lightSpeedInLeft">Effortless Expense Monitoring for Business Evolution</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="company-details container-fluid">
                <div className="row p-5 bg-dark d-flex align-items-center">
                    <div className="col d-flex justify-content-center">
                        <div className="py-5">
                            <img src={p_4} className="rounded rounded-3" alt="..." style={{height: "50vh", width: "auto"}} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="container-fluid p-5" style={{marginLeft: "-40px"}}>
                            <p className='display-5' style={{fontWeight: "400"}} >Managing and Tracking expense for growing businesses </p>
                            <p className='display-6' style={{fontSize: "3vh"}}>Welcome to Xpense Tracker, where we revolutionize the way businesses manage and
                                track employee expenses. Our cutting-edge expense management platform offers a
                                seamless and efficient solution for businesses of all sizes to effortlessly monitor and control
                                employee expenditures.</p>
                            <Link to = '/about-us'><button className="btn btn-secondary" id="read-more">Read more</button></Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container-fluid p-4" style={{backgroundColor: "rgb(93, 150, 241)"}}>    
                <div className='si display-3 text-center text-white' style={{fontWeight: "400"}}>Supporting Industries</div>
                <div className="d-flex p-4 mt-3 justify-content-around ">
                    <div className="si-img finance rounded">
                        <div className='p-2 display-6 rounded text-dark' style={{ backgroundColor: "white", opacity: "1", fontSize: "24px", fontWeight: "400" }}>
                            Finance and Accounting
                        </div>
                    </div>
                    <div className="si-img it rounded">
                    <div className='p-2 display-6 rounded text-dark' style={{ backgroundColor: "white", opacity: "1", fontSize: "24px", fontWeight: "400" }}>
                            IT Sector
                        </div>
                    </div>
                    <div className="si-img start-up rounded">
                    <div className='p-2 display-6 rounded text-dark' style={{ backgroundColor: "white", opacity: "1", fontSize: "24px", fontWeight: "400" }}>
                            Start ups
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}