import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
