import React, { Component } from "react";
import Counter from "./Counter";
export default class Counters extends Component {
  render() {
    console.log("Counters Rendered");

    // let CounterLength = this.state.counter.length;
    return (
      <div>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.handleReset()}
        >
          Reset
        </button>
        <button
          className="btn btn-secondary btn-sm m-1"
          onClick={() => this.props.handleAdd()}
        >
          Add Counter
        </button>
        {this.props.counters.map((element, index) => {
          return (
            <Counter
              key={element.id}
              value={element.value}
              handleDelete={this.props.handleDelete}
              buttonId={element.id}
              index={index}
              handleIncrement={this.props.handleIncrement}
              handleDecrement={this.props.handleDecrement}
            />
          );
        })}
      </div>
    );
  }
}
