// import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/navbar";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
      { id: 7, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App Constructor");
  }
  componentDidMount() {
    console.log("App mounted");
  }

  handleIncrement = index => {
    console.log(index);
    this.setState(state => {
      state.counters[index].value++;
      console.log(state);
      return state;
    });
  };
  handleDelete = id => {
    console.log("id", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    console.log(counters);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((element, index) => {
      element.value = 0;
      return element;
    });
    console.log(counters);
    this.setState({ counters });
  };

  handleAdd = () => {
    // const newCounter = { id: Math.random(), value: 0 };
    // const newCounters = [...this.state.counters, newCounter];
    // console.log(newCounters);
    this.setState(state => ({
      counters: [...state.counters, { id: Math.random(), value: 0 }]
    }));
  };
  handleDecrement = index => {
    console.log("on decrement");
    this.setState(state => {
      state.counters[index].value--;
      return state;
    });
  };
  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <div>
          <Navbar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
        </div>
        <div className="App">
          <Counters
            handleIncrement={this.handleIncrement}
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            handleReset={this.handleReset}
            counters={this.state.counters}
            handleDecrement={this.handleDecrement}
          />
        </div>
      </React.Fragment>
    );
  }
}
