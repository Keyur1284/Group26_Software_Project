import '../css/Homepage.css';

export const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row">
          <div className="col-lg-6">
              <div className="contact-form">
                  <form className="form-horizontal" action="" method="post">
                      <fieldset>
                          <legend className="footer-text-contact footer-text-contact-extra">Contact us</legend>

                          <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="name">Name</label>
                              <div className="col-md-9">
                                  <input id="name" name="name" type="text" placeholder="Your name"
                                      className="form-control" />
                              </div>
                          </div>

                          <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="email">Your E-mail</label>
                              <div className="col-md-9">
                                  <input id="email" name="email" type="text" placeholder="Your email"
                                      className="form-control" />
                              </div>
                          </div>

                          <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="message">Your message</label>
                              <div className="col-md-12">
                                  <textarea className="form-control" id="message" name="message"
                                      placeholder="Please enter your message here..." rows="5"></textarea>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="col-md-12 text-right">
                                  <button type="submit" className="btn btn-primary btn-lg submit-btn" >Submit</button>
                              </div>
                          </div>
                      </fieldset>
                  </form>
              </div>
          </div>
          <div className="col-lg-3">
              <div className="sitemap">
                  <div className="sitemap-txt">
                      <legend className='sitemap-txt-extra'>Sitemap</legend>

                      <p>All our pages</p>

                      <ul>
                          <li><a href="https://kashish2934.github.io/Home-Page/">Home</a></li>
                          <li><a href="https://kashish2934.github.io/Home-Page/">About us</a></li>
                          <li><a href="https://kashish2934.github.io/Home-Page/">Features</a></li>
                          <li><a href="https://kashish2934.github.io/Home-Page/">Pricing</a></li>
                          <li><a href="https://kashish2934.github.io/Home-Page/">Contact us</a></li>
                      </ul>
                  </div>
              </div>
          </div>


          <div className="col-lg-3 ">
              <div className="contact-details">
                  <div className="contact-details-text">
                      <legend className='footer-text-contact-extra'>Mobile No </legend>
                      <p>+91 0123456789</p>
                      <legend className='footer-text-contact-extra'>Email </legend>
                      <p>abc@daiict.ac.in</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}
