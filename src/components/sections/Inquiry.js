import React, { Component } from "react";
import { featureData } from "../../data/featureData";
import Services from "./utils/Services";

const initialState = {
    name: "",
    email: "",
    nameError: "pending",
    emailError: "pending"
};

class Inquiry extends Component {
    state = initialState;

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validateForm();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState); // clear input fields
        }
    };

    validateForm = () => {
        let nameError = "";
        let emailError = "";

        if (!this.state.name) {
            nameError = "* Please enter your name.";
        }

        if (this.state.name && typeof this.state.name !== "undefined") {
            const re = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i;
            if (!re.test(this.state.name)) {
                nameError =
                    "Oops! Seems like you have punctuation signs in your name.";
            }
        }

        if (!this.state.email) {
            emailError = "* Please enter your email.";
        }

        if (this.state.email && typeof this.state.email !== "undefined") {
            const re = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!re.test(this.state.email)) {
                emailError = "Entered email is not valid.";
            }
        }

        if (emailError || nameError) {
            this.setState({ emailError, nameError });
            return false;
        }

        return true;
    };

    checkError = (err) => {
        if (err !== "pending" && !err) {
            return "borderBlue";
        } else if (err !== "pending" && err) {
            return "borderPink";
        }
    };

    showSign = (err) => {
        if (err !== "pending" && !err) {
            return (
                <img
                    className="sign"
                    src={require("../../resources/icons/true-check.svg")}
                    alt="sign"
                />
            );
        } else if (err !== "pending" && err) {
            return (
                <img
                    className="sign"
                    src={require("../../resources/icons/x-pink.svg")}
                    alt="sign"
                />
            );
        }
    };

    render() {
        return (
            <section className="inquiry">
                <div className="inquiry__div-1">
                    <h2 className="h2-universal">Get quote</h2>
                    <button className="book-btn">Book a call</button>
                </div>

                <h3 className="inquiry__h3">
                    Send us an email and we will get back to you in no time!
                </h3>

                <form className="inquiry__form" onSubmit={this.onFormSubmit}>
                    <div className="shell-1">
                        <div className="inputs-div">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onInputChange}
                                className={this.checkError(this.state.nameError)}
                            />
                            {this.showSign(this.state.nameError)}
                            {this.state.nameError !== "pending" && (
                                <p className="p-error">
                                    {this.state.nameError}
                                </p>
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={this.state.email}
                                onChange={this.onInputChange}
                                className={this.checkError(this.state.emailError)}
                            />
                            {this.showSign(this.state.emailError)}
                            {this.state.emailError !== "pending" && (
                                <p className="p-error">
                                    {this.state.emailError}
                                </p>
                            )}
                            <input
                                type="text"
                                name="position"
                                placeholder="Position"
                            />
                        </div>
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="shell-2">
                        <input type="checkbox" name="c-box" id="c-box" />
                        <label className="c-box-label" htmlFor="c-box">
                            I would like to receive the Golux club Newsletter
                        </label>
                    </div>

                    <div className="methods-services-div">
                        <div className="helper-div">
                            <div className="methods-div">
                                <h3 className="h3-universal">Work Method</h3>
                                <div className="methods">
                                    <div className="group">
                                        <img
                                            src={require("../../resources/icons/choice-1.png")}
                                            alt="choice-1"
                                        />
                                        <h4>Dedicated team</h4>
                                    </div>
                                    <div className="group">
                                        <img
                                            src={require("../../resources/icons/choice-2.png")}
                                            alt="choice-2"
                                        />
                                        <h4>Project team</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="services-div">
                                <h3 className="h3-universal">Services</h3>
                                <Services data={featureData.third} />
                            </div>
                        </div>
                        <button className="send-btn" type="submit">
                            Send Inquiry
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Inquiry;
