import React, { Component } from "react";

class Play extends Component {
    render() {
        return (
            <section className="play">
                <h2 className="h2-universal">Choose your play</h2>
                <div className="play__div">
                    <div className="choice">
                        <img
                            src={require("../resources/icons/choice-1.png")}
                            alt="choice-1"
                        />
                        <h4>Dedicated teams</h4>
                        <p>
                            We can assemble "your own Dedicated Team" which will
                            be 100% tailored to your requirements, whether you
                            are running a software company, developing an online
                            business or simply looking to expand your existing
                            team.
                        </p>
                    </div>
                    <h3 className="h3-universal">or</h3>
                    <div className="choice">
                        <img
                            src={require("../resources/icons/choice-2.png")}
                            alt="choice-2"
                        />
                        <h4>Fixed price projects</h4>
                        <p>
                            We can also help you carry your digital ideas to
                            life by building exceptional products from scratch.
                            Q has delivered hundreds of custom made projects for
                            clients in 20 countries worldwide - from Alaska to
                            Dubai.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Play;
