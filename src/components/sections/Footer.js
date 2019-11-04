import React, { Component } from "react";

class Footer extends Component {
    state = {
        intervalId: 0
    };

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(
            this.scrollStep.bind(this),
            this.props.delayInMs
        );
        this.setState({ intervalId: intervalId });
    }

    render() {
        const div2Links = [
            "Home",
            "What we do",
            "About",
            "Blog",
            "Careers",
            "Contact"
        ];

        const div3Links = [
            "Backend development",
            "Frontend development",
            "Mobile development",
            "Web Design",
            "Marketing & SEO",
            "Business Consulting"
        ];

        return (
            <footer className="footer">
                <div className="footer__div--upper">
                    <img
                        className="golux-logo"
                        src={require("../../resources/images/golux-logo.png")}
                        alt="golux-logo"
                    />
                    <img
                        className="back-to-top"
                        src={require("../../resources/icons/back-to-top.svg")}
                        alt="back-to-top"
                        onClick={() => {
                            this.scrollToTop();
                        }}
                    />
                </div>
                <div className="footer__div--middle">
                    <div className="div-1">
                        <p className="lorem">
                            Lorem ipsum dolor sit amet, consectetuer adipisicing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam
                        </p>
                        <p className="blue">offce@golux.co</p>
                        <p className="blue">+381 64 397 4918</p>
                        <h3 className="h3-universal">Belgrade, Serbia</h3>
                        <h4>Bulevar Mihajla Pupina 422/5</h4>
                    </div>
                    <div className="div-2">
                        {div2Links.map((link) => (
                            <a href="#!" key={link}>
                                {link}
                            </a>
                        ))}
                    </div>
                    <div className="div-3">
                        {div3Links.map((link) => (
                            <a href="#!" key={link}>
                                {link}
                            </a>
                        ))}
                    </div>
                    <div className="div-4">
                        <div className="icon-div">
                            <img
                                src={require("../../resources/icons/golux-club.svg")}
                                alt="golux-club"
                            />
                            <span>Golux club</span>
                        </div>
                        <button className="btn-view">View</button>
                        <button className="btn-join">Join</button>
                        <div className="icon-div">
                            <img
                                src={require("../../resources/icons/phone.svg")}
                                alt="phone"
                            />
                            <span>Get quote</span>
                        </div>
                        <button className="btn-book">Book a call</button>
                        <div className="icon-div">
                            <img
                                src={require("../../resources/icons/mail.svg")}
                                alt="mail"
                            />
                            <span>Newsletter</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail here"
                        />
                        <button className="btn-sub">Subscribe</button>
                    </div>
                </div>
                <div className="footer__div--lower">
                    <div className="div-copyright">
                        <p>
                            &copy; Golux Technologies - powered by Golux Group
                        </p>
                    </div>
                    <div className="div-icons">
                        <img
                            src={require("../../resources/icons/insta.svg")}
                            alt="insta"
                        />
                        <img
                            src={require("../../resources/icons/linkedin.svg")}
                            alt="linkedin"
                        />
                    </div>
                    <div className="div-policy">
                        <p>Privacy policy</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
