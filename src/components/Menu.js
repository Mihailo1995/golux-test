import React, { Component } from "react";

export class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>What we do</li>
                </ul>
            </div>
        );
    }
}

export default Menu;
