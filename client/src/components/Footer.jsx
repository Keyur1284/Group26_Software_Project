/* eslint-disable react/jsx-no-target-blank */
import { MDBFooter } from "mdb-react-ui-kit";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from '@mui/icons-material/Place';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-white">
      <section className="p-5">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-3">
              <p className="display-6">
                <a
                  href="https://github.com/Keyur1284/Group26_Software_Project"
                  target="_blank"
                >
                  <img
                    src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1-600x600.jpg"
                    alt="logo"
                    className="rounded-circle me-3"
                    style={{ height: "50px", width: "50px" }}
                  />
                </a>
                Xpense Tracker
              </p>
              <p>
                Welcome to Xpense Tracker, where we revolutionize the way
                businesses manage and track employee expenses.
              </p>
            </div>

            <div className="col-5 mx-5">

            <i className="fas fa-map-marker-alt" />
            <p className="display-6 mb-4 text-center"> <PlaceIcon sx={{fontSize: 37, marginBottom: 1.5}}/> Company Address</p>
              <div className="d-flex gap-3">
                  <p className="w-100"> Dhirubhai Ambani Institute of Information and Communication Technology, Near Indroda Circle, Gandhinagar - 382 007, Gujarat (India)</p>
                 <div className="w-100"><iframe width='100%' height='200vh' className="rounded" title="DA-IICT Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14669.989595290104!2d72.6289155!3d23.188537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1678437146026!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe></div>
              </div>
            </div>

            <div className="col-3 mx-2">
              <div className="container mx-3">
                <p className="display-6 mb-4">
                  Contact Information
                </p>
                <p>
                  <MailIcon className="me-2" /> 
                  <a href="mailto:" className="text-white text-decoration-none" target="_blank">
                    xpensetracker26@gmail.com
                  </a>
                </p>
                <p>
                  <PhoneIcon className="me-2" />
                  <a href="tel:" className="text-white text-decoration-none" target="_blank">
                    +91 9510554403
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-6 mt-3">
              <div className="mx-3 display-6"> <ConnectWithoutContactIcon sx={{fontSize: 40}} /> Connect with us</div>
            </div>

            <div className="col-6 mt-3 text-end">
              <div>
                <a
                  href="https://github.com/Keyur1284/Group26_Software_Project"
                  target="_blank"
                >
                  <button
                    className="btn btn-lg btn-dark rounded-circle text-white"
                    style={{ height: "75px", marginLeft: "100px" }}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </button>
                </a>
                <a
                  href="https://github.com/Keyur1284/Group26_Software_Project"
                  target="_blank"
                >
                  <button
                    className="btn btn-lg btn-dark rounded-circle text-white"
                    style={{ height: "75px" }}
                  >
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                  </button>
                </a>
                <a href="https://github.com/Keyur1284/Group26_Software_Project">
                  <button
                    className="btn btn-lg btn-dark rounded-circle text-white"
                    style={{ height: "75px" }}
                  >
                    <YouTubeIcon sx={{ fontSize: 40 }} />
                  </button>
                </a>
                <a
                  href="https://github.com/Keyur1284/Group26_Software_Project"
                  target="_blank"
                >
                  <button
                    className="btn btn-lg btn-dark rounded-circle text-white"
                    style={{ height: "75px" }}
                  >
                    <TwitterIcon sx={{ fontSize: 40 }} />
                  </button>
                </a>
                <a
                  href="https://github.com/Keyur1284/Group26_Software_Project"
                  target="_blank"
                >
                  <button
                    className="btn btn-lg btn-dark rounded-circle text-white"
                    style={{ height: "75px" }}
                  >
                    <InstagramIcon sx={{ fontSize: 40 }} />
                  </button>
                </a>
                <a
                  href="https://github.com/Keyur1284/Group26_Software_Project"
                  target="_blank"
                >
                  <button
                    className="btn btn-lg btn-dark rounded-circle text-white"
                    style={{ height: "75px" }}
                  >
                    <FacebookIcon sx={{ fontSize: 40 }} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <div className="text-center bg-dark p-2">© Xpense Tracker 2023. All Rights Reserved</div>
    </MDBFooter>
  );
};
