import React, { Component } from "react";
import "./App.css";
import isr from "./helpers/isr";

class App extends Component {
  constructor() {
    super();
    this.state = { salary: 0, isr: 0 };
    this.updateIsr = this.updateIsr.bind(this);
  }

  updateIsr(event) {
    const salary = parseInt(event.target.value);
    this.setState({ salary, isr: isr(salary) });
  }

  render() {
    return (
      <div className="App">
        <h6>Salary</h6>
        <input
          type="text"
          value={this.state.salary}
          onChange={this.updateIsr}
        />

        <h6>ISR</h6>
        <input type="text" value={this.state.isr} readOnly />
      </div>
    );
  }
}

export default App;
