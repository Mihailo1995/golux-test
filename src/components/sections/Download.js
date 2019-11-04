import React, { Component } from "react";

export class Download extends Component {
    render() {
        return (
            <section className="download">
                <img
                    src={require("../../resources/images/Golux_logo_ilustration.png")}
                    alt="Golux_logo_ilustration"
                />
                <div>
                    <p>
                        <strong>
                            Specific info about company, values and philosophy.
                        </strong>{" "}
                        Sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis.
                    </p>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 23.25 30"
                        >
                            <path
                                d="M9.78,22.43a2.53,2.53,0,0,0,1.37.76l.24,0a1.81,1.81,0,0,0,.23,0h0a2.52,2.52,0,0,0,1.78-.74l9.09-9.1A2.52,2.52,0,0,0,19,9.84l-4.81,4.81V2.52a2.52,2.52,0,1,0-5,0V14.63l-4.8-4.8A2.52,2.52,0,0,0,.75,13.39Z"
                                fill="#d21553"
                            />
                            <path
                                d="M20.73,25H2.52a2.52,2.52,0,0,0,0,5H20.73a2.52,2.52,0,0,0,0-5Z"
                                fill="#d21553"
                            />
                        </svg>
                        Download media kit
                    </button>
                </div>
            </section>
        );
    }
}

export default Download;
