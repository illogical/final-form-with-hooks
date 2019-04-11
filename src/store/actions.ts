import { createAction, ActionType } from "typesafe-actions";
import { Product } from "../listSearch/searchRedux";

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
