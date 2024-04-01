const ResumeSection = () => {
    return (
        <section className="ftco-section ftco-no-pb" id="resume-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-10 heading-section text-center ftco-animate">
                        <h1 className="big big-2">Resume</h1>
                        <h2 className="mb-4">Resume</h2>
                        <p>
                            Seasoned Senior Data Analyst with 5+ years of experience driving
                            business strategies through data-driven insights. Proven expertise in
                            data science, statistical analysis, machine learning algorithms and
                            project management.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <h1 className="big-4">Experience</h1>
                    <div className="underline"></div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-6">
                        <div className="resume-wrap ftco-animate">
                            <span className="date">2021-Present</span>
                            <h2>Senior Data Analyst</h2>
                            <span className="position">Merkle</span>
                            <p className="mt-4">
                                Merkle, a leading CXM and media company with over 10K+ professionals
                                globally. It's a part of Dentsu International.
                            </p>
                            <ul>
                                <li>
                                    Analysed ad campaigns, clickstream, and customer surveys data,
                                    identified an increasing demand and launched a strategic product
                                    line.
                                </li>
                                <li>
                                    Developed time series forecasting models to predict sales and
                                    optimize marketing budgets, got model performance of 92%.
                                </li>
                                <li>
                                    Designed and executed A/B tests, performed rigorous statistical
                                    analysis. Led to 20% MoM increase in the conversion rate.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="resume-wrap ftco-animate">
                            <span className="date">2018-2021</span>
                            <h2>Senior Data Analyst</h2>
                            <span className="position">iQuanti</span>
                            <p className="mt-4">
                                iQuanti is a data-driven digital marketing analytics and solutions
                                company, helps top 100 global brands.
                            </p>
                            <ul>
                                <li>
                                    Performed in-depth market research and analysis to create online
                                    pages. Resulted in ~100% website growth and 30% increase in
                                    conversion rate YoY.
                                </li>
                                <li>
                                    Delivered multiple training and mentorship sessions on
                                    analytical tools like SQL, MS Excel, Power BI, Tableau and
                                    Python.
                                </li>
                                <li>
                                    Performed migration and enhancements for merchandising
                                    dashboard, involved data integration and its feature
                                    improvement.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className="row">
                    <h1 className="big-4">Education</h1>
                    <div className="underline"></div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-6">
                        <div className="resume-wrap ftco-animate">
                            <span className="date">2014-2018</span>
                            <h2>Bachelor of Engineering</h2>
                            <span className="position">Visvesvaraya Technological University</span>
                            <p className="mt-4">Grade: First class distinction.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="resume-wrap ftco-animate">
                            <span className="date">2012-2013</span>
                            <h2>Higher Secondary School</h2>
                            <span className="position">Army Public School</span>
                            <p className="mt-4">Grade: First class distinction.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 text-center ftco-animate">
                        <p>
                            <button className="btn btn-primary py-4 px-5">Download CV</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
