/* eslint-disable react/jsx-no-target-blank */
import { MDBFooter } from "mdb-react-ui-kit";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-white">
      <section className="px-5">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-6 mt-3">
              <div className="mx-3 display-6">Follow us</div>
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

      <section className="p-5">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-4">
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
                Welcome to Xpense Track, where we revolutionize the way
                businesses manage and track employee expenses.
              </p>
            </div>

            <div className="col-4"></div>

            <div className="col-4">
              <div className="container mx-3">
                <p className="display-6 mb-4">Contact Us</p>
                <p>
                  <BusinessIcon className="me-2" />
                  Gujarat, India
                </p>
                <p>
                  <MailIcon className="me-2" /> 20210xxxx@daiict.ac.in
                </p>
                <p>
                  <PhoneIcon className="me-2" /> +91 9876543210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center bg-dark p-2">© Xpense Tracker 2023. All Rights Reserved</div>
    </MDBFooter>
  );
};
