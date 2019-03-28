import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { SearchList } from "./form/searchHook";
import { Segment } from "semantic-ui-react";
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
        <Segment>
          <SearchList list={someSortedFakeData} />
        </Segment>
      </div>
    );
  }
}

export default App;
