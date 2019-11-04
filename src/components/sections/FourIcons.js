import React, { Component } from "react";

class FourIcons extends Component {
    render() {
        return (
            <section className="four-icons">
                <div className="four-icons__div">
                    <img src={require("../../resources/icons/company.png")} alt="icon"/>
                    <h3>Company</h3>
                </div>
                <div className="four-icons__div">
                    <img src={require("../../resources/icons/value.png")} alt="icon"/>
                    <h3>Values</h3>
                </div>
                <div className="four-icons__div">
                    <img src={require("../../resources/icons/team.png")} alt="icon"/>
                    <h3>Team</h3>
                </div>
                <div className="four-icons__div">
                    <img src={require("../../resources/icons/careers.png")} alt="icon"/>
                    <h3>Careers</h3>
                </div>
            </section>
        );
    }
}

export default FourIcons;
