import { createAction, ActionType } from "typesafe-actions";
import { Product } from "../listSearch/searchRedux";

// actions define the action.payload and broadcasts an action object to all reducers

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
    resolve => (searchTerm: Product[]) => resolve(searchTerm)
  )
};

export type RootAction = ActionType<typeof actions>;
