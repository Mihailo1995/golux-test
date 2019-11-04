import React, { Component, Fragment } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Lab from "./sections/Lab";
import Play from "./sections/Play";
import WeAre from "./sections/WeAre";
import Inquiry from "./sections/Inquiry";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";
import Subscribe from "./sections/Subscribe";
import Join from "./sections/Join";
import Footer from "./sections/Footer";

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Hero />
                <Lab />
                <Play />
                <WeAre />
                <Inquiry />
                <Testimonials />
                <WhyUs />
                <Subscribe />
                <Join />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
