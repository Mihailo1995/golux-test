import React, { Component } from "react";

class Lab extends Component {
    render() {
        return (
            <section className="lab">
                <div className="lab__div-1">
                    <h2 className="h2-universal">Golux lab</h2>
                    <p className="lab__p">
                        We never build something your business doesn't need. Our
                        developers live for the thrill, and break the boundaries
                        of digital. By engaging even one developer, you receive
                        an entire machinery of experts to back you up. Whatever
                        the Q, we got the A.
                    </p>
                    <a className="lab__a" href="#!">
                        our tools
                    </a>
                </div>
                <div className="lab__div-2">
                    <h3 className="h3-universal">Software Development</h3>
                    <div className="features-div">
                        <div className="feature">
                            <img
                                src={require("../resources/icons/feature-1.png")}
                                alt="feature-1"
                            />
                            <h3>Backend Web Development</h3>
                            <ul>
                                <li>Custom functionalities</li>
                                <li>Databases</li>
                                <li>Administration</li>
                            </ul>
                            <a href="#!">Learn more</a>
                        </div>
                        <div className="feature">
                            <img
                                src={require("../resources/icons/feature-2.png")}
                                alt="feature-2"
                            />
                            <h3>Backend Web Development</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <a href="#!">Learn more</a>
                        </div>
                        <div className="feature">
                            <img
                                src={require("../resources/icons/feature-3.png")}
                                alt="feature-3"
                            />
                            <h3>Mobile Development</h3>
                            <ul>
                                <li>Android Apps</li>
                                <li>iOS Apps</li>
                                <li>Web Apps</li>
                            </ul>
                            <a href="#!">Learn more</a>
                        </div>
                    </div>
                    <h3 className="h3-universal">
                        Design | Marketing | Consulting
                    </h3>
                    <div className="features-div">
                        <div className="feature">
                            <img
                                src={require("../resources/icons/feature-4.png")}
                                alt="feature-4"
                            />
                            <h3>Design</h3>
                            <ul>
                                <li>Branding</li>
                                <li>UX/UI Design</li>
                                <li>Custom Design</li>
                            </ul>
                            <a href="#!">Learn more</a>
                        </div>
                        <div className="feature">
                            <img
                                src={require("../resources/icons/feature-5.png")}
                                alt="feature-5"
                            />
                            <h3>Marketing & SEO</h3>
                            <ul>
                                <li>Sales Strategy</li>
                                <li>We Analytics</li>
                                <li>Keyword campaigns</li>
                            </ul>
                            <a href="#!">Learn more</a>
                        </div>
                        <div className="feature">
                            <img
                                src={require("../resources/icons/feature-6.png")}
                                alt="feature-6"
                            />
                            <h3>Business Consulting</h3>
                            <ul>
                                <li>Business dev</li>
                                <li>Goal-Attaining</li>
                                <li>Problem solving</li>
                            </ul>
                            <a href="#!">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Lab;
