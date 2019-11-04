import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Menu extends Component {
    render() {
        const { isMenuShown } = this.props;

        return (
            <div className={`menu ${isMenuShown && "show"}`}>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li>Contact</li>
                    <li>What we do</li>
                </ul>
            </div>
        );
    }
}

export default Menu;
