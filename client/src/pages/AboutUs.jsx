import pic_1 from '../assets/AboutUs-images/Vedant.jpg';
import pic_2 from '../assets/AboutUs-images/Jainil.jpg';
import pic_3 from '../assets/AboutUs-images/Himanshu_photo.jpg';
import pic_4 from '../assets/AboutUs-images/Ayush.jpg';
import pic_5 from '../assets/AboutUs-images/Nancy.jpg';
import pic_6 from '../assets/AboutUs-images/Keyur.jpeg';
import pic_7 from '../assets/AboutUs-images/Kashish.jpg';
import pic_8 from '../assets/AboutUs-images/Akhil.jpg';
import pic_9 from '../assets/AboutUs-images/Hardik.jpg';
import pic_10 from '../assets/AboutUs-images/Sahil.jpg';
import pic_11 from '../assets/AboutUs-images/Ishita.jpg';

export const AboutUs = () => {
    return (
      <div className="container-fluid">
        <style>
          {`
            body {
              background: radial-gradient(circle, #16a3f0, #6c27e3);
            }
          `}
          {`
          .card-hover {
          transform: scale(1);
          transition: transform 0.4s, box-shadow 0.2s;
          }
  
          .card-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
          }
        `}
  
        </style>
        <div className="row align-items-center">
          <div className="col-lg-12 mt-3 mb-3">
            <span className="h2 d-block text-center mt-5" style={{color:"white", fontSize: 64}}>
                Meet our Clonify Team
            </span>
  
          </div>
          <div className="col-md-12">
            <div className="row justify-content-center ps-4 pe-4 mt-5">
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F" }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_1}
                    alt="Vedant Pandya"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white", fontWeight: 400}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Vedant Pandya</h5>
                    <span>202101063</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_2}
                    alt="Jainil Patel"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Jainil Patel</h5>
                    <span>202101416</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_3}
                    alt="Himanshu Vachhani"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Himanshu Vachhani</h5>
                    <span>202101475</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_4}
                    alt="Aush Patel" 
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Ayush Patel</h5>
                    <span>202101476</span>
                  </div>
                </div>
              </div>
            </div>
  
  
  
          <div className="row justify-content-center ps-4 pe-4 mt-5">
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_5}
                    alt="Nancy Patel"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Nancy Patel</h5>
                    <span>202101491</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_6}
                    alt="Keyur Govrani"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Keyur Govrani</h5>
                    <span>202101498</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_7}
                    alt="Kashish"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Kashish Patel</h5>
                    <span>202101502</span>
                  </div>
                </div>
              </div>
          </div>
  
  
  
  
          <div className="row justify-content-center ps-4 pe-4 mt-5 mb-5">
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F" }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_8}
                    alt="Akhil Patoliya"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white", fontWeight: 400}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Akhil Patoliya</h5>
                    <span>202101505</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_9}
                    alt="Hardik Mehta"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Hardik Mehta</h5>
                    <span>202101506</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_10}
                    alt="Sahil Bhadesiya"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Sahil Bhadesiya</h5>
                    <span>202101511</span>
                  </div>
                </div>
              </div>
  
              <div className="col-md-3 d-flex">
                <div className="card mb-3 me-3 rounded-5 card-hover" style={{ height: "62vh", width: "30vw", backgroundColor:"#013E8F"  }}>
                  <img
                    className="card-img-top img-fluid rounded-top-5"
                    src={pic_11}
                    alt="Ishita Rathod"
                    style={{ height: "50vh", width: "30vw" }}
                  />
                  <div className="card-body py-3" style={{color:"white"}}>
                    <h5 className="mb-0" style={{fontSize:25}}>Ishita Rathod</h5>
                    <span>202101516</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  
  