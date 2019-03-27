import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { TestingHooks } from "./form/testingHooks";
import ModalExampleMultiple from "./modal/testingModals";
import { ModalFactory } from "./modal/modalFactory";
import { SearchList } from "./form/searchHook";
import { Container, Segment } from "semantic-ui-react";
import faker from "faker";
import * as _ from "lodash";

const someFakeData = _.times(20, i => {
  return { id: i, name: faker.name.firstName() };
});

const someSortedFakeData = _.sortBy(someFakeData, ["name"]);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* // <ModalExampleMultiple />
        <ModalFactory
          title="Modal factory in action"
          buttonText="Open my modal"
        >
          <div>Here is some simple content</div>
          <br />
          <ModalFactory title="a 2nd modal!" buttonText="Open another one" />
        </ModalFactory> */}
        <Segment>
          <SearchList list={someSortedFakeData} />
        </Segment>
      </div>
    );
  }
}

export default App;
