import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers";
import faker from "faker";
import * as _ from "lodash";

const someFakeData = _.times(20, i => {
  return { id: i, name: faker.name.firstName() };
});
const someSortedFakeData = _.sortBy(someFakeData, "name");

const store = createStore(rootReducer, { sampleList: someSortedFakeData });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
