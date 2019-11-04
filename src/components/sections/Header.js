import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const menuIcon = {
    open: require("../../resources/icons/hamburger-menu.svg"),
    exit: require("../../resources/icons/hamburger-menu-exit.svg")
};

class Header extends Component {
    state = {
        isMenuShown: false
    };

    onMenuClick = () => {
        this.setState({ isMenuShown: !this.state.isMenuShown });
    };

    getMenuIcon = () => (this.state.isMenuShown ? "exit" : "open");

    render() {
        const { helperClass } = this.props;
        const iconName = this.getMenuIcon();

        return (
            <header className={`header ${helperClass}`}>
                <Link to="/" className="link">
                    <img
                        className="header__golux-logo"
                        src={require("../../resources/images/golux-logo.png")}
                        alt="Golux logo"
                    />
                </Link>
                <nav className="header__nav">
                    <button className="quote-btn">Get Quote</button>
                    <svg
                        className="user-btn"
                        id="content"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27.42 37.75"
                    >
                        <path
                            className="cls-1"
                            d="M21.41,17.22H6a6,6,0,0,0-6,6v8.51a6,6,0,0,0,6,6h15.4a6,6,0,0,0,6-6V23.23A6,6,0,0,0,21.41,17.22Zm3.26,14.52A3.26,3.26,0,0,1,21.41,35H6a3.26,3.26,0,0,1-3.26-3.26V23.23A3.26,3.26,0,0,1,6,20h15.4a3.26,3.26,0,0,1,3.26,3.26Z"
                        />
                        <path
                            className="cls-1"
                            d="M13.94,0a6.83,6.83,0,1,0,6.82,6.82A6.83,6.83,0,0,0,13.94,0Zm0,10.9A4.08,4.08,0,1,1,18,6.82,4.08,4.08,0,0,1,13.94,10.9Z"
                        />
                    </svg>
                    <button onClick={this.onMenuClick} className="menu-btn">
                        <img src={menuIcon[iconName]} alt="Menu button" />
                    </button>
                    {this.state.isMenuShown && (
                        <Menu isMenuShown={this.state.isMenuShown} />
                    )}
                </nav>
            </header>
        );
    }
}

export default Header;
