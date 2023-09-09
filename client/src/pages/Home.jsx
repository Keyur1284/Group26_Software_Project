import '../css/Homepage.css';
import p_1 from '../assets/dashboard-img/p_1.jpg';
import p_2 from '../assets/dashboard-img/p_2.jpg';
import p_3 from '../assets/dashboard-img/p_3.jpg';
import p_4 from '../assets/dashboard-img/p_4.jpg';

export const Home = () => {
    return (
        <div className='py-5'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators bg-transparent">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active c-item">
                        <img src={p_1} className="d-block w-100 c-img" alt="..." />

                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="animate__animated animate__lightSpeedInRight text-uppercase"> Xpense Tracker </h2>
                            <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        </div>

                    </div>
                    <div className="carousel-item c-item">
                        <img src={p_2} className="d-block w-100 c-img" alt="..." />

                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="animate__animated animate__lightSpeedInRight text-uppercase"> Xpense Tracker </h2>
                            <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        </div>

                    </div>
                    <div className="carousel-item c-item">
                        <img src={p_3} className="d-block w-100 c-img" alt="..." />

                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="animate__animated animate__lightSpeedInRight text-uppercase"> Xpense Tracker </h2>
                            <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="company-details container-fluid">
                <div className="row bg-dark">
                    <div className="col-lg-6">
                        <div className="mx-5 cd-img">
                            <img src={p_4} className="d-block w-100 rounded" alt="..." />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cd-text my-5 py-5">
                            <h3 className='mx-2'>Managing and Tracking expense for growing businesses </h3>
                            <p className='my-0 mx-2'>Welcome to Xpense Track, where we revolutionize the way businesses manage and
                                track employee expenses. Our cutting-edge expense management platform offers a
                                seamless and efficient solution for businesses of all sizes to effortlessly monitor and control
                                employee expenditures.</p>
                            <div className="container my-0">
                                <div>
                                    <button className="btn btn-secondary" id="read-more">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <h3 className='si text-center my-5 text-uppercase font-weight-bold'>Supporting Industries</h3>
            <div className="d-flex flex-row justify-content-around">
                <div className="si-img finance rounded">Finance and Accounting</div>
                <div className="si-img it rounded">IT Sector</div>
                <div className="si-img start-up rounded">Start Ups</div>
            </div>
        </div>
    )
}