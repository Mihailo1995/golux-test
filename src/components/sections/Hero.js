import React, { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <img
                    className="hero__phone"
                    src={require("../../resources/images/telefon-mockup.png")}
                    alt="telefon-mockup"
                />
                <div className="hero__div">
                    <h1 className="hero__h1">
                        A luxury fashion brand for Digital Presence!
                    </h1>
                    <p className="hero__p">
                        Golux technologies creates the product you desire with
                        cutting edge technology and following the latest trends
                        in design and user experience.
                    </p>
                    <button className="hero__btn">Learn More</button>
                </div>
            </section>
        );
    }
}

export default Hero;
