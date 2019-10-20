import React from "react";

function Choice({ source, alt, h4_label, text }) {
    return (
        <div className="choice">
            <img src={source} alt={alt} />
            <h4>{h4_label}</h4>
            <p>{text}</p>
        </div>
    );
}

export default Choice;
