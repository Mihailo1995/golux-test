import React, { useState } from "react";
import { css } from "emotion";
import { data } from "../../data/testimonialData";
// import Slider from "react-animated-slider";
import Client from "./utils/Client";
import Arrow from "./utils/Arrow";

function Testimonials() {
    const [current, setCurrent] = useState(data[1]);
    const [active, setActive] = useState(1);

    const onLiClick = (e) => {
        setCurrent(data[e.target.getAttribute("data-li")]);
        setActive(e.target.getAttribute("data-li"));
    };

    const onLeftArrowClick = () => {
        // setCurrent(data[current-1]);
        // setActive(current-1);
        console.log("Left");
    };

    const onRightArrowClick = () => {
        // setCurrent(data[current+1]);
        // setActive(data[current+1]);
        console.log("Right");
    };

    return (
        <section className="testimonials">
            <h2 className="h2-universal">Kind words from our clients</h2>
            <div className="carousel">
                <div className="slider">
                    <Client
                        text={current.text}
                        name={current.name}
                        title={current.title}
                        company={current.company}
                    />
                </div>
                <div className="control">
                    <Arrow direction="left" />
                    <Arrow direction="right" />
                    <ul
                        className={css`
                        li[data-li="${active}"] {
                            background-color: #144077 !important;
                            transform: scale(1.5);
                        }                    
                    `}
                    >
                        {Object.keys(data).map((index) => (
                            <li
                                onClick={(e) => onLiClick(e)}
                                data-li={index}
                                key={index}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <a href="#!">View all clients</a>
        </section>
    );
}

export default Testimonials;
