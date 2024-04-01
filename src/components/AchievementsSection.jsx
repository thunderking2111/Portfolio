const AchievementsSection = () => {
    return (
        <section
            className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
            id="section-counter"
        >
            <div className="container">
                <div className="row d-md-flex align-items-center">
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18">
                            <div className="text">
                                <strong className="number" data-number="20">
                                    0
                                </strong>
                                <span>Achievements</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18">
                            <div className="text">
                                <strong className="number" data-number="30">
                                    0
                                </strong>
                                <span>Projects</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18">
                            <div className="text">
                                <strong className="number" data-number="1000">
                                    0
                                </strong>
                                <span>Mentored Students</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                        <div className="block-18">
                            <div className="text">
                                <strong className="number" data-number="500">
                                    0
                                </strong>
                                <span>Cups of coffee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="ftco-section ftco-hireme img margin-top"
                style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            >
                <div className="row justify-content-center">
                    <div className="col-md-7 ftco-animate text-center">
                        <h2>
                            More projects on<span> Github </span>{" "}
                        </h2>
                        <div className="heading">
                            {" "}
                            <h4>
                                {" "}
                                I love to solve business problems &amp; uncover hidden data stories{" "}
                            </h4>
                            <br />
                            <p>
                                <a
                                    href="https://github.com/thunderking2111"
                                    className="btn btn-primary py-3 px-5"
                                >
                                    GitHub
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
