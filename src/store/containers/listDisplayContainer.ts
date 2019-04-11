import { connect } from "react-redux";
import { ListDisplay } from "../../form/listDisplay";
import { getActiveListItem } from "../selectors";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => getActiveListItem(state);

export const ListDisplayContainer = connect(mapStateToProps)(ListDisplay);
