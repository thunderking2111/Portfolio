const Contact = () => {
    return (
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h1 className="big big-2">Contact</h1>
                        <h2 className="mb-4">Contact Me</h2>
                        <p>Below are the details to reach out to me!</p>
                    </div>
                </div>

                <div className="row d-flex contact-info mb-5">
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-map-signs"></span>
                            </div>
                            <h3 className="mb-4">Address</h3>
                            <p>Gujarat, India</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-phone2"></span>
                            </div>
                            <h3 className="mb-4">Contact Number</h3>
                            <p>
                                <a href="tel://+917434003507">+91 74340 03507</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-paper-plane"></span>
                            </div>
                            <h3 className="mb-4">Email Address</h3>
                            <p>
                                <a href="mailto:rrahulp395@gmail.com">rrahulp395@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-globe"></span>
                            </div>
                            <h3 className="mb-4">Download Resume</h3>
                            <p>
                                <button className="btn btn-white btn-link px-4">resumelink</button>
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <br />
                        <br />
                        <div className="row justify-content-center">
                            <div className="col-md-7 ftco-animate text-center">
                                <h2>
                                    Have a<span> Question? </span>{" "}
                                    <a
                                        href="https://forms.gle/uLaTShUKXraAvHJ77"
                                        className="btn btn-primary py-3 px-5"
                                    >
                                        Click Here
                                    </a>{" "}
                                </h2>
                            </div>
                        </div>
                        <br />
                        <ul className="ftco-footer-social list-unstyled d-flex justify-content-center align-items-center mb-0">
                            <li className="ftco-animate normal-txt">Find me on </li>
                            <li className="ftco-animate">
                                <a href="https://github.com/thunderking2111">
                                    <span className="icon-github"></span>
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a href="https://www.linkedin.com/in/rahul-prajapati211/">
                                    <span className="icon-linkedin"></span>
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a href="/">
                                    <span className="icon-twitter"></span>
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a href="/">
                                    <span className="icon-facebook"></span>
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a href="/">
                                    <span className="icon-instagram"></span>
                                </a>
                            </li>
                        </ul>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
