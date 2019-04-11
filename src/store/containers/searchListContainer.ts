import { connect } from "react-redux";
import { RootState } from "../reducers";
import { SearchList } from "../../listSearch/searchRedux";
import { actions } from "../actions";
import {
  getActiveId,
  getFilteredSampleList
} from "../selectors";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    list: getFilteredSampleList(state),
    activeItemId: getActiveId(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onActiveChanged: (id: number) => dispatch(actions.updateActiveId(id)),
  onSearchChanged: (searchTerm: string) =>
    dispatch(actions.updateSearchTerm(searchTerm))
});

export const SearchListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
