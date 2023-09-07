import '../css/Homepage.css';

export const Footer = () => {
    return (
        <div className="footer container-fluid bg-dark">
            <div className="row justify-content-start">
                <div className="col-lg-5">
                    <div className="contact-form">
                        <form className="form-horizontal" action="" method="post">
                            <fieldset>
                                <legend className="footer-text-contact footer-text-contact-extra">Contact us</legend>

                                <div className="form-group">
                                    <label className="control-label" htmlFor="name">Name</label>
                                    <div className="">
                                        <input id="name" name="name" type="text" placeholder="Your name"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label" htmlFor="email">Your E-mail</label>
                                    <div className="">
                                        <input id="email" name="email" type="text" placeholder="Your email"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label" htmlFor="message">Your message</label>
                                    <div className="">
                                        <textarea className="form-control" id="message" name="message"
                                            placeholder="Please enter your message here..." rows="5"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary btn-sm submit-btn" >Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sitemap">
                        <div className="sitemap-txt">
                            <legend className='sitemap-txt-extra'>Sitemap</legend>

                            <p>All our pages</p>

                            <ul className='px-0'>
                                <ul className='py-1'><a className='text-decoration-none link-secondary' href="https://kashish2934.github.io/Home-Page/">Home</a></ul>
                                <ul className='py-1'><a className='text-decoration-none link-secondary' href="https://kashish2934.github.io/Home-Page/">About us</a></ul>
                                <ul className='py-1'><a className='text-decoration-none link-secondary' href="https://kashish2934.github.io/Home-Page/">Features</a></ul>
                                <ul className='py-1'><a className='text-decoration-none link-secondary' href="https://kashish2934.github.io/Home-Page/">Pricing</a></ul>
                                <ul className='py-1'><a className='text-decoration-none link-secondary' href="https://kashish2934.github.io/Home-Page/">Contact us</a></ul>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3">
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
