import React, { Component } from 'react'

class Partners extends Component {
    render() {
        return (
            <section className="partners">
                <h2 className="h2-universal">Golux partners</h2>
                <div className="partners__div">
                    <div className="hex-3">
                        <img src={require("../../resources/images/partners.png")} alt="partner"/>
                        <img src={require("../../resources/images/partners.png")} alt="partner"/>
                        <img src={require("../../resources/images/partners.png")} alt="partner"/>
                    </div>
                    <div className="hex-2">
                        <img src={require("../../resources/images/partners.png")} alt="partner"/>
                        <img src={require("../../resources/images/partners.png")} alt="partner"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partners
