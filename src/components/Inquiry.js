import React, { Component } from "react";

class Inquiry extends Component {
    render() {
        return (
            <section className="inquiry">
                <div className="inquiry__div-1">
                    <h2 className="h2-universal">Get quote</h2>
                    <button className="book-btn">Book a call</button>
                </div>

                <h3 className="inquiry__h3">
                    Send us an email and we will get back to you in no time!
                </h3>

                <form className="inquiry__form">
                    <div className="shell-1">
                        <div className="inputs-div">
                            <input type="text" name="name" placeholder="Name" />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                            />
                            <input
                                type="text"
                                name="position"
                                placeholder="Position"
                            />
                        </div>
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="shell-2">
                        <input type="checkbox" name="c-box" id="c-box" />
                        <label className="c-box-label" htmlFor="c-box">
                            I would like to receive the Golux club Newsletter
                        </label>
                    </div>
                </form>

                <div className="methods-services-div">
                    <div className="helper-div">
                        <div className="methods-div">
                            <h3 className="h3-universal">Work Method</h3>
                            <div className="methods">
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/choice-1.png")}
                                        alt="choice-1"
                                    />
                                    <h4>Dedicated team</h4>
                                </div>
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/choice-2.png")}
                                        alt="choice-2"
                                    />
                                    <h4>Project team</h4>
                                </div>
                            </div>
                        </div>
                        <div className="services-div">
                            <h3 className="h3-universal">Services</h3>
                            <div className="services">
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/feature-1.png")}
                                        alt="feature-1"
                                    />
                                    <h4>Backend</h4>
                                </div>
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/feature-2.png")}
                                        alt="feature-2"
                                    />
                                    <h4>Frontend</h4>
                                </div>
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/feature-3.png")}
                                        alt="feature-3"
                                    />
                                    <h4>Mobile dev</h4>
                                </div>
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/feature-4.png")}
                                        alt="feature-4"
                                    />
                                    <h4>Design</h4>
                                </div>
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/feature-5.png")}
                                        alt="feature-5"
                                    />
                                    <h4>Marketing & SEO</h4>
                                </div>
                                <div className="group">
                                    <img
                                        src={require("../resources/icons/feature-6.png")}
                                        alt="feature-6"
                                    />
                                    <h4>Business dev</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="send-btn">Send Inquiry</button>
                </div>
            </section>
        );
    }
}

export default Inquiry;
