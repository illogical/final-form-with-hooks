import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { TestingHooks } from "./form/testingHooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestingHooks />
      </div>
    );
  }
}

export default App;
