import React, { useState } from "react";
import { css } from "emotion";
import { data } from "../../data/testimonialData";
import Client from "./utils/Client";

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
    }

    const onRightArrowClick = () => {
        // setCurrent(data[current+1]);
        // setActive(data[current+1]);
        console.log("Right");
    }

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
                    <svg
                        className="arrow left"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28.36 53.89"
                        onClick={onLeftArrowClick}
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
                        onClick={onRightArrowClick}
                    >
                        <title>Next</title>
                        <polygon
                            className="cls-1"
                            points="1.41 53.89 0 52.48 25.53 26.95 0 1.41 1.41 0 28.36 26.95 1.41 53.89"
                        />
                    </svg>

                    <ul className={css`
                        li[data-li="${active}"] {
                            background-color: #144077 !important;
                            transform: scale(1.5);
                        }                    
                    `}>
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
