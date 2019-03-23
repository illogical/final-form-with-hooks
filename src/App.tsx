import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { TestingHooks } from "./form/testingHooks";
import ModalExampleMultiple from "./modal/testingModals";
import { ModalFactory } from "./modal/modalFactory";
import { Button } from "semantic-ui-react";
import { SearchList } from "./form/searchHook";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ModalExampleMultiple /> */}
        <ModalFactory
          title="Modal factory in action"
          buttonText="Open my modal"
        >
          <div>Here is some simple content</div>
          <br />
          <ModalFactory title="a 2nd modal!" buttonText="Open another one">
            <SearchList
              list={[
                { id: 1, name: "Matt" },
                { id: 2, name: "Michael" },
                { id: 3, name: "Mark" },
                { id: 4, name: "Sandy" },
                { id: 5, name: "William" }
              ]}
            />
          </ModalFactory>
        </ModalFactory>
      </div>
    );
  }
}

export default App;
