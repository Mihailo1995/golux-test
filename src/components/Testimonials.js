import React, { Component } from "react";
import Client from "./Client";

class Testimonials extends Component {

    render() {
        return (
            <section className="testimonials">
                <h2 className="h2-universal">Kind words from our clients</h2>
                <div className="carousel">
                    <div className="slider">
                        <Client 
                            text="Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus amet aliquam
                            pariatur explicabo quis ipsam ducimus porro
                            doloremque similique."
                            name="Bob Wick"
                            title="CEO"
                            company="Microsoft"
                        />
                        <Client 
                            text="Lorem ipsum dolor sit amet, consectetuer
                            adipisicing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam."
                            name="Yuri Markov"
                            title="Marketing Director"
                            company="FoFor"
                        />
                        <Client 
                            text="Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Tenetur omnis minus sequi! A
                            iste voluptas necessitatibus iusto doloremque
                            ipsam unde."
                            name="John Smith"
                            title="Android developer"
                            company="Google"
                        />
                    </div>
                    <div className="control">
                        <svg
                            className="arrow left"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28.36 53.89"
                        >
                            <title>Previous</title>
                            <polygon
                                className="cls-1"
                                points="1.41 53.89 0 52.48 25.53 26.95 0 1.41 1.41 0 28.36 26.95 1.41 53.89"
                            />
                        </svg>

                        <svg
                            className="arrow right"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28.36 53.89"
                        >
                            <title>Next</title>
                            <polygon
                                className="cls-1"
                                points="1.41 53.89 0 52.48 25.53 26.95 0 1.41 1.41 0 28.36 26.95 1.41 53.89"
                            />
                        </svg>

                        <ul>
                            <li></li>
                            <li className="selected"></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <a href="#!">View all clients</a>
            </section>
        );
    }
}

export default Testimonials;
