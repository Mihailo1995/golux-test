import React, { Component } from "react";

class WeAre extends Component {
    render() {
        return (
            <section className="we-are">
                <div className="we-are__div-1">
                    <span className="h2-universal">We are</span>
                    <img
                        src={require("../../resources/images/golux-logo.png")}
                        alt="Golux logo"
                    />
                </div>
                <div className="we-are__div-2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipisicing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <div className="rectangle">
                        <img
                            src={require("../../resources/images/play.png")}
                            alt="play"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default WeAre;
