import React, { Component } from "react";

export default class Counter extends Component {
  // state = {
  //   value: this.props.value,
  //   buttonId: this.props.buttonId
  //   // tags: []
  // };
  formateCount = () => {
    const { value } = this.props;
    return value === 0 ? 0 : value;
  };
  badgeColor = () => {
    let badge = "btn m-2 btn-sm btn-";
    badge += this.props.value === 0 ? "warning" : "primary";
    return badge;
  };
  // handleIncrement = () => {
  //   this.setState(
  //     state => {
  //       state.value++;
  //       return state;
  //     },
  //     () => console.log(this.props.value)
  //   );
  // };
  componentDidUpdate(preveProps, preveState) {
    console.log("preProp", preveProps);
    console.log("preState", preveState);
  }
  componentWillUnmount() {
    console.log("Counter unmount");
  }
  render() {
    console.log("Counter Rendered");
    return (
      <div>
        <span className={this.badgeColor()}>{this.formateCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.handleIncrement(this.props.index)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.handleDecrement(this.props.index)}
          disabled={this.props.value === 0 ? "true" : null}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.handleDelete(this.props.buttonId)}
        >
          X
        </button>

        {/* {[...Array(this.props.tags.length)].map((item, index) => {
          return <li key={index}>{this.props.tags[index]}</li>;
        })} */}
        {/* {this.props.tags?.length &&
          null(
            <ul>
              {this.props.tags.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          )} */}
      </div>
    );
  }
}
