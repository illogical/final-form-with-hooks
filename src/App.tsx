import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { TestingHooks } from "./form/testingHooks";
import ModalExampleMultiple from "./modal/testingModals";
import { ModalFactory } from './modal/modalFactory';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ModalExampleMultiple /> */}
        <ModalFactory title="Modal factory in action" buttonText="Open my modal">
          <div>Here is some simple content</div>
          <ModalFactory title="a 2nd modal!" buttonText="Open another one">
            <div>Here is another modal!!!!!</div>
          </ModalFactory>
        </ModalFactory>
      </div>
    );
  }
}

export default App;
