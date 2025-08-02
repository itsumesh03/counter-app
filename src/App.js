

import React, { Component, useState } from "react";
import "./App.css";

// Class Component Counter
class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
    });
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <div className="counter-controls">
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

// Functional Component Counter
function FunctionCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <div className="counter-controls">
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="components-row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;

