import { actions, RootAction } from "./actions";
import { getType } from "typesafe-actions";
import * as _ from "lodash";

import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { SampleListItem } from "../form/searchRedux";

/*************************************************************************************************************
Reducers
*************************************************************************************************************/

const defaultListState: SampleListItem[] = []; // make an explicitly-typed array to drive the intellisense of this piece of state

export const sampleListReducer = (
  state = defaultListState, // IMPORTANT: This provides the type to intellisense. Always define this.
  action: RootAction
): SampleListItem[] => {
  switch (action.type) {
    case getType(actions.setSampleList):
      return _.sortBy(action.payload, "name"); // sort the list before storing it into Redux state
    default:
      return state;
  }
};

export const activeItemReducer = (state = -1, action: RootAction): number => {
  switch (action.type) {
    case getType(actions.updateActiveId):
      return action.payload;
    default:
      return state;
  }
};

export const searchTermReducer = (state = "", action: RootAction): string => {
  switch (action.type) {
    case getType(actions.updateSearchTerm):
      return action.payload;
    default:
      return state;
  }
};

/*************************************************************************************************************
Bundles reducers together
*************************************************************************************************************/

export const rootReducer = combineReducers({
  sampleList: sampleListReducer,
  activeId: activeItemReducer,
  searchTerm: searchTermReducer
});

export type RootState = StateType<typeof rootReducer>;
