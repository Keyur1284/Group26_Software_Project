import '../css/Homepage.css';

// import pic_2 from '../assets/dashboard-img/pic_2';
// import pic_4 from '../assets/dashboard-img/pic_4';
// import pic_6 from '../assets/dashboard-img/pic_6';
// import pic_1 from '../assets/dashboard-img/pic_1';
// import pic_3 from '../assets/dashboard-img/pic_3';

export const Home = () => {
  return (
    <div>
            
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active c-item">
                    <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg" className="d-block w-100 c-img" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animate__animated animate__lightSpeedInRight "> Xpense Trackr </h5>
                        <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        <p><a href="#" className="animate__animated animate__rubberBand"> More Info </a></p>
                    </div>

                </div>
                <div className="carousel-item c-item">
                    <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg" className="d-block w-100 c-img" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animate__animated animate__lightSpeedInRight "> Xpense Trackr </h5>
                        <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        <p><a href="#" className="animate__animated animate__rubberBand"> More Info </a></p>
                    </div>

                </div>
                <div className="carousel-item c-item">
                    <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg" className="d-block w-100 c-img" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animate__animated animate__lightSpeedInRight "> Xpense Trackr </h5>
                        <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        <p><a href="#" className="animate__animated animate__rubberBand"> More Info </a></p>
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
        <div className="row">
            <div className="col-lg-6">
                <div className="cd-img">
                    <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg" className="d-block w-100 h-100 cd-img-2" alt="..." />
                </div>
            </div>
    <div className="col-lg-6">
        <div className="cd-text">
            <h3>Managing and Tracking expense for growing businesses </h3>
            <p>Welcome to Xpense Track, where we revolutionize the way businesses manage and
                track employee expenses. Our cutting-edge expense management platform offers a
                seamless and efficient solution for businesses of all sizes to effortlessly monitor and control
                employee expenditures.</p>
            <div className="container">
                <div className="center">
                    <button className="btn btn-primary" id="read-more">Read more</button>
                </div>
            </div>
        </div>
    </div>
    </div>

    </div>
    <div className="supporting-industries">
        <div className="si-text">
            <div className="si-container">
                <div className="center">
                    <h2>Supporting Industries</h2>
                </div>
                
            </div>

            <div className="carousel2">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg" className="d-block w-100" alt="..." /> 
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg"className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
    </div>
</div>
  )
}
