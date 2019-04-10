import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { SearchListContainer } from "./store/containers/searchListContainer";

const App = () => {
  return (
    <div className="App">
      <Segment>
        <SearchListContainer />
      </Segment>
    </div>
  );
};

export default App;
