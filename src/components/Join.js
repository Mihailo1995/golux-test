import React, { Component } from "react";

class Join extends Component {
    render() {
        return (
            <section className="join">
                <img
                    src={require("../resources/images/golux-logo-white.png")}
                    alt="golux-logo-white"
                />
                <div>
                    <p>
                        Join <span>Golux Club</span> and get special offers from
                        our team
                    </p>
                    <button>Join</button>
                </div>
            </section>
        );
    }
}

export default Join;
