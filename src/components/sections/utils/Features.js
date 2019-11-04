import React from "react";

function Features({ data }) {
    return (
        <div className="features-div">
            {data.map((d) => (
                <div className="feature" key={d.id}>
                    <img
                        src={d.source}
                        alt={d.alt}
                    />
                    <h3>{d.h3_label}</h3>
                    <ul>
                        <li>{d.liArr[0]}</li>
                        <li>{d.liArr[1]}</li>
                        <li>{d.liArr[2]}</li>
                    </ul>
                    <a href="#!">Learn more</a>
                </div>
            ))}
        </div>
    );
}

export default Features;
