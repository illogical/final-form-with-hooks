import { RootState } from "./reducers";
import { createSelector } from "reselect";
import * as lodash from "lodash";

export const getSampleList = (state: RootState) => state.sampleList;
export const getSearchTerm = (state: RootState) => state.searchTerm;
export const getActiveId = (state: RootState) => state.activeId;

export const getFilteredSampleList = createSelector(
  getSampleList,
  getSearchTerm,
  (list, searchTerm) => {
    // filter the tenant list by searchTerm
    return list.filter(
      t => t.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }
);

export const getActiveListItem = createSelector(
  getSampleList,
  getActiveId,
  (list, activeId) => {
    const listItem = lodash.find(list, { id: activeId });
    return listItem;
  }
);
