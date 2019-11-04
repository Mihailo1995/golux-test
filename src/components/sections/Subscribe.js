import React, { Component } from "react";

class Subscribe extends Component {
    render() {
        return (
            <section className="subscribe">
                <div className="subscribe__div">
                    <p>
                        Subscribe & get a hand picked list of the best
                        development link every week.
                    </p>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail here"
                        />
                        <button>Subscribe</button>
                    </div>
                </div>
                <img
                    src={require("../../resources/images/subscribe.png")}
                    alt="subscribe"
                />
            </section>
        );
    }
}

export default Subscribe;
