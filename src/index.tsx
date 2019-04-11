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
import { composeWithDevTools } from "redux-devtools-extension";

const someFakeData = _.times(20, i => {
  return {
    id: i,
    name: faker.commerce.productName(),
    price: faker.random.number(100)
  };
});
const someSortedFakeData = _.sortBy(someFakeData, "name");

// this is all it takes to configure redux
// pass in the reducers and optionally pass initial state and enhancers
const store = createStore(
  rootReducer,
  { sampleList: someSortedFakeData },
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
