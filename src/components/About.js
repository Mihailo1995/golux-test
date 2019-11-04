import React, { Component, Fragment } from "react";
import Header from "./sections/Header";
import Download from "./sections/Download";
import Join from "./sections/Join";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import FourIcons from "./sections/FourIcons";
import Niche from "./sections/Niche";
import Programs from "./sections/Programs";
import TwoButtons from "./sections/TwoButtons";
import Partners from "./sections/Partners";

class About extends Component {
    componentDidMount() {
        document.title = "Golux | About";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <Header helperClass="bg-white" />
                <Download />
                <FourIcons />
                <Niche />
                <Programs />
                <TwoButtons />
                <Partners />
                <Subscribe />
                <Join />
                <Footer />
            </Fragment>
        );
    }
}

export default About;
