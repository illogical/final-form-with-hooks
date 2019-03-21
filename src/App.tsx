import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { TestingHooks } from "./form/testingHooks";
import ModalExampleMultiple from "./modal/testingModals";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalExampleMultiple />
      </div>
    );
  }
}

export default App;
