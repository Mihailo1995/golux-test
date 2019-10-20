import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lab from "./components/Lab";
import Play from "./components/Play";
import WeAre from "./components/WeAre";
import Inquiry from "./components/Inquiry";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Subscribe from "./components/Subscribe";
import Join from "./components/Join";
import Footer from "./components/Footer";

class App extends Component {
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

export default App;
