import bg_1 from "./../lib/images/bg_1.jpg";

import { useEffect, useRef } from "react";

const Home = () => {
    const typingAnimationRef = useRef(null);
    const typingTexts = ["Software Engineer", "FreeLancer"];
    useEffect(() => {
        // Create a function to display the typing animation for a given text
        let currentTextIndex = 0;
        let textCharIndex = 0;
        let timeout = 200;
        const typingAnimation = async () => {
            if (textCharIndex === typingTexts[currentTextIndex].length) {
                currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
                textCharIndex = 0;
                await new Promise((resolve) => setTimeout(resolve, 500));
                typingAnimationRef.current.textContent = "";
            } else {
                timeout = typingTexts[currentTextIndex][textCharIndex] === " " ? 0 : 200;
                typingAnimationRef.current.textContent +=
                    typingTexts[currentTextIndex][textCharIndex];
                textCharIndex++;
            }
            typingInterval = setTimeout(typingAnimation, timeout);
        };

        let typingInterval = setTimeout(typingAnimation, 200);

        return () => clearInterval(typingInterval);
    });

    return (
        <section id="home-section" className="hero overflow-hidden">
            <div className="home-slider owl-carousel">
                <div className="slider-item ">
                    <div className="overlay"></div>
                    <div className="container">
                        <div
                            className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                            data-scrollax-parent="true"
                        >
                            <div
                                className="one-third js-fullheight order-md-last img"
                                style={{ backgroundImage: `url(${bg_1})`, height: "951px" }}
                            >
                                <div className="overlay"></div>
                            </div>
                            <div
                                className="one-forth d-flex  align-items-center ftco-animate"
                                data-scrollax=" properties: { translateY: '70%' }"
                            >
                                <div className="text">
                                    <span className="subheading">Hello!</span>
                                    <h1 className="mb-4 mt-3">
                                        I'm <span>Rahul Prajapati</span>
                                    </h1>

                                    <span ref={typingAnimationRef} id="typing-animation"></span>

                                    <br />
                                    <br />
                                    <h2>A Software Engineer</h2>
                                    <p>
                                        <a
                                            href="https://www.youtube.com/@RishabhMishraOfficial"
                                            className="btn btn-primary py-3 px-4"
                                        >
                                            YouTube
                                        </a>
                                        <a
                                            href="https://github.com/thunderking2111"
                                            className="btn btn-white btn-outline-white py-3 px-4"
                                        >
                                            My works
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

export default Home;
