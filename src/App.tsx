import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { SearchListContainer } from "./store/containers/searchListContainer";
import { ListDisplayContainer } from "./store/containers/listDisplayContainer";

const App = () => {
  return (
    <div className="App">
      <Segment>
        <SearchListContainer />
      </Segment>
      <ListDisplayContainer />
    </div>
  );
};

export default App;
