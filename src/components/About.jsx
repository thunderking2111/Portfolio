import aboutImg from "./../lib/images/bg_1.jpg";

const About = () => {
    return (
        <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
            <div className="container">
                <div className="row">
                    <div className="row d-flex align-items-stretch">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="img-about img d-flex flex-column align-items-stretch">
                                <div className="overlay">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img
                                                    src={aboutImg}
                                                    className="img-fluid rounded b-shadow-a"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                <p>
                                                    <span className="title-s">Name: </span>
                                                    <span>Rahul Prajapati</span>
                                                </p>
                                                <p>
                                                    <span className="title-s">Job Role: </span>
                                                    <span>Software Engineer</span>
                                                </p>
                                                <p>
                                                    <span className="title-s">Experience: </span>
                                                    <span>2 Years 1 Month</span>
                                                </p>
                                                <p>
                                                    <span className="title-s">Address: </span>
                                                    <span>Gujarat, India</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-mf">
                                        <p className="title-s">Skills</p>
                                        <span>SQL</span> <span className="pull-right">95%</span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "95%" }}
                                                aria-valuenow="95"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span>PYTHON</span> <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "85%" }}
                                                aria-valuenow="85"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span>Data Visualization</span>
                                        <span className="pull-right">90%</span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow="90"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span>Statistical Analysis</span>
                                        <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "85%" }}
                                                aria-valuenow="85"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span>Machine Learning</span>
                                        <span className="pull-right">80%</span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow="80"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section ftco-animate">
                                    <h1 className="big">About</h1>
                                    <h2 className="mb-4">About Me</h2>
                                    <p>
                                        I'm a software engineer with over 2 years of experience and
                                        a Bachelor's degree in Computer Science. Based in Gujarat, I
                                        specialize in crafting innovative solutions using Python,
                                        Django, React, and vanilla JavaScript. With a passion for
                                        problem-solving and a dedication to excellence, I thrive on
                                        tackling challenges and driving innovation in every project.
                                    </p>
                                    <ul className="about-info mt-4 px-md-0 px-2">
                                        <li className="d-flex">
                                            <span>Profile:</span> <span>Software Engineer</span>
                                        </li>
                                        {/* <li className="d-flex">
                                            <span>Domain:</span>
                                            <span>

                                            </span>
                                        </li> */}
                                        <li className="d-flex">
                                            <span>Education:</span>
                                            <span>Bachelor of Technology</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Language:</span> <span>English, Hindi</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Other Skills:</span>
                                            <span>
                                                Cloud, PySpark, Excel, Git, JIRA, Google Analytics
                                                &amp; SEO
                                            </span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Interest:</span>
                                            <span>Traveling, Travel Photography, Table Tennis</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="counter-wrap ftco-animate d-flex mt-md-3">
                                <div className="text">
                                    <p className="mb-4">
                                        <span className="number" data-number="30">
                                            0
                                        </span>
                                        <span>+</span>
                                        <span>&nbsp; Projects completed</span>
                                    </p>
                                    <p>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://www.linkedin.com/in/rahul-prajapati211/"
                                            className="btn btn-primary py-3 px-3"
                                        >
                                            LinkedIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
