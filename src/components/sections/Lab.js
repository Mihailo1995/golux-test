import React, { Component } from "react";
import Features from "./utils/Features";
import { featureData } from "../../data/featureData";

class Lab extends Component {
    render() {
        return (
            <section className="lab">
                <div className="lab__div-1">
                    <h2 className="h2-universal">Golux lab</h2>
                    <p className="lab__p">
                        We never build something your business doesn't need. Our
                        developers live for the thrill, and break the boundaries
                        of digital. By engaging even one developer, you receive
                        an entire machinery of experts to back you up. Whatever
                        the Q, we got the A.
                    </p>
                    <a className="lab__a" href="#!">
                        our tools
                    </a>
                </div>
                <div className="lab__div-2">
                    <h3 className="h3-universal">Software Development</h3>
                    <Features data={featureData.first} />
                    <h3 className="h3-universal">
                        Design | Marketing | Consulting
                    </h3>
                    <Features data={featureData.second} />
                </div>
            </section>
        );
    }
}

export default Lab;
