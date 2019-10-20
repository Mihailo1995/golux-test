import React, { Component } from "react";
import Choice from "./Choice";

class Play extends Component {
    render() {
        return (
            <section className="play">
                <h2 className="h2-universal">Choose your play</h2>
                <div className="play__div">
                    <Choice
                        source={require("../resources/icons/choice-1.png")}
                        alt="choice-1"
                        h4_label="Dedicated teams"
                        text='We can assemble "your own Dedicated Team" which will
                        be 100% tailored to your requirements, whether you
                        are running a software company, developing an online
                        business or simply looking to expand your existing
                        team.'
                    />
                    <h3 className="h3-universal">or</h3>
                    <Choice
                        source={require("../resources/icons/choice-2.png")}
                        alt="choice-2"
                        h4_label="Fixed price projects"
                        text='We can also help you carry your digital ideas to
                        life by building exceptional products from scratch.
                        Q has delivered hundreds of custom made projects for
                        clients in 20 countries worldwide - from Alaska to
                        Dubai.'
                    />
                </div>
            </section>
        );
    }
}

export default Play;
