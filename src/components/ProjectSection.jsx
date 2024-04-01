import proj1Img from "./../lib/images/proj_1.jpg";
import proj2Img from "./../lib/images/proj_2.jpg";
import proj3Img from "./../lib/images/proj_3.jpg";
import proj4Img from "./../lib/images/proj_4.jpg";
import proj5Img from "./../lib/images/proj_5.jpg";

const ProjectSection = () => {
    return (
        <section className="ftco-section" id="project-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h1 className="big big-2">Projects</h1>
                        <h2 className="mb-4">Projects</h2>
                        <p>
                            Below are the sample Data Analytics projects on SQL, Python, Power BI &
                            ML.
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <a
                                href="/"
                                className="block-20 zoom-effect"
                                style={{ backgroundImage: `url(${proj1Img})` }}
                            >
                                Digital Music Store Data Analysis using SQL
                            </a>
                            <div className="text mt-3 float-right d-block">
                                <h3 className="heading">
                                    <a href="/">Digital Music Store Data Analysis using SQL</a>
                                </h3>
                                <p>
                                    Analyzed music store data using advanced SQL queries to identify
                                    gaps and increase the business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <a
                                href="/"
                                className="block-20 zoom-effect"
                                style={{ backgroundImage: `url(${proj2Img})` }}
                            >
                                Data Analysis using Python Project for Beginners
                            </a>
                            <div className="text mt-3 float-right d-block">
                                <h3 className="heading">
                                    <a href="/">Data Analysis using Python Project for Beginners</a>
                                </h3>
                                <p>
                                    Performed exploratory data analysis on Diwali sales data using
                                    Python to improve the customer experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry">
                            <a
                                href="/"
                                className="block-20 zoom-effect"
                                style={{ backgroundImage: `url(${proj3Img})` }}
                            >
                                Power BI Sales dashboard Project for Beginners
                            </a>
                            <div className="text mt-3 float-right d-block">
                                <h3 className="heading">
                                    <a href="/">Power BI Sales dashboard Project for Beginners</a>
                                </h3>
                                <p>
                                    Designed a Power BI dashboard for Madhav Store to track and
                                    analyze the online sales data across India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <a
                                href="/"
                                className="block-20 zoom-effect"
                                style={{ backgroundImage: `url(${proj4Img})` }}
                            >
                                Sales Forecast- Time Series Forecasting
                            </a>
                            <div className="text mt-3 float-right d-block">
                                <h3 className="heading">
                                    <a href="/">Sales Forecast- Time Series Forecasting</a>
                                </h3>
                                <p>
                                    Used multiple machine learning models to forecast sales (retail
                                    store) and performed time series analysis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <a
                                href="/"
                                className="block-20 zoom-effect"
                                style={{ backgroundImage: `url(${proj5Img})` }}
                            >
                                <span>Customer Segmentation using clustering model</span>
                            </a>
                            <div className="text mt-3 float-right d-block">
                                <h3 className="heading">
                                    <a href="/">Customer Segmentation using clustering model</a>
                                </h3>
                                <p>
                                    Developed a ML model to give various recommendations of
                                    financial products &amp; services on target customer groups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
