import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    console.log("Navbar Rendered");

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-text">
            Total Active Counters {this.props.totalCounters}
          </span>
        </nav>
      </div>
    );
  }
}
