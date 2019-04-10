import { createAction, ActionType } from "typesafe-actions";
import { SampleListItem } from "../form/searchRedux";

export const actions = {
  updateActiveId: createAction("updateActiveId", resolve => (itemId: number) =>
    resolve(itemId)
  ),

  updateSearchTerm: createAction(
    "updateSearchTerm",
    resolve => (searchTerm: string) => resolve(searchTerm)
  ),

  setSampleList: createAction(
    "setSampleList",
    resolve => (searchTerm: SampleListItem[]) => resolve(searchTerm)
  )
};

export type RootAction = ActionType<typeof actions>;
