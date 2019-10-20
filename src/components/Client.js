import React from "react";

function Client({ text, name, title, company }) {
    return (
        <section>
            <img src={require("../resources/images/nigga.png")} alt="person" />
            <p>
                {text}
            </p>
            <h4 className="name">{name}</h4>
            <h4 className="title">
                {title} @ <span>{company}</span>
            </h4>
        </section>
    );
}

export default Client;
