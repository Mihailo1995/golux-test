import React, { Component } from 'react'

class TwoButtons extends Component {
    render() {
        return (
            <section className="two-buttons">
                <button className="btn-clients">
                    <img src={require("../../resources/icons/clients-hand.svg")} alt="hand" /> Clients</button>
                <button className="btn-download">
                    <img src={require("../../resources/icons/download-icon.svg")} alt="download" /> Download presentation</button>
            </section>
        )
    }
}

export default TwoButtons
