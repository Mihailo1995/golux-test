import React, { Component } from "react";
import Program from "./utils/Program";

class Programs extends Component {
    // listPrograms = () => {
    //     let programs = [];
    //     for (let i = 0; i < 3; i++) {
    //         programs.push(<Program key={i} />);
    //     }
    //     return <div className="programs__loyalty">{programs}</div>;
    // };

    render() {
        let programs = [];
        for (let i = 0; i < 3; i++) {
            programs.push(<Program key={i} />);
        }

        return (
            <section className="programs">
                <h2 className="h2-universal">Loyalty programs</h2>
                <p className="programs__p">
                    We're constantly staying on the edge of the new technology -
                    taking the best, changing, adapting to what fits us best. We
                    never stop at just "good enough", but always strive for
                    "great" - and then some more. Our loyal clients caught a
                    glimpse of that.
                </p>
                {/* {this.listPrograms()} */}
                <div className="programs__loyalty">{programs}</div>

                <div className="blog">
                    <div className="blog__div-1">
                        <img
                            src={require("../../resources/images/blog.png")}
                            alt="blog"
                        />
                        <h3>React vs. Angular. Battle for the Front-end</h3>
                        <div className="div-info">
                            <div className="div-author">
                                <p>Yuri Markov</p>
                                <p>19 June, 2019</p>
                                <p>7 min read</p>
                            </div>
                            <div className="div-icon">
                                <img
                                    src={require("../../resources/icons/share.svg")}
                                    alt="share"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="blog__div-2">
                        <div className="rubric">
                            <div className="div-date">
                                <h3>15</h3>
                                <p>jun</p>
                            </div>
                            <div className="div-headline">
                                <h4>
                                    React vs. Angular. Battle for the Frontend
                                </h4>
                                <p>Anastasiia Avramenko</p>
                            </div>
                        </div>
                        <div className="rubric">
                            <div className="div-date">
                                <h3>25</h3>
                                <p>jun</p>
                            </div>
                            <div className="div-headline">
                                <h4>Google Sheets Tutorial for Beginners</h4>
                                <p>Artur Hebda</p>
                            </div>
                        </div>
                        <div className="rubric">
                            <div className="div-date">
                                <h3>04</h3>
                                <p>jul</p>
                            </div>
                            <div className="div-headline">
                                <h4>
                                    Product Development Roadmap - Your Guide
                                    Through the Product Strategy
                                </h4>
                                <p>Yuri Markov</p>
                            </div>
                        </div>
                        <div className="rubric">
                            <div className="div-date">
                                <h3>12</h3>
                                <p>aug</p>
                            </div>
                            <div className="div-headline">
                                <h4>
                                    React vs. Angular. Battle for the Frontend
                                </h4>
                                <p>Anastasiia Avramenko</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Programs;
