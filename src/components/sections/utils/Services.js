import React from "react";

function Services({ data }) {
    return (
        <div className="services">
            {data.map((d) => (
                <div className="group" key={d.id}>
                    <img src={d.source} alt={d.alt} />
                    <h4>{d.h4_label}</h4>
                </div>
            ))}
        </div>
    );
}

export default Services;
