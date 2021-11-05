import {ProductsStateType} from "../../types/productsState.type";
import {ActionType} from "../../types/action.type";
import {SET_CURRENT_PRODUCT, SET_PRODUCTS} from "../actions";

const initialState: ProductsStateType = {
  products: [],
  currentProduct: {}
}

export const productsReducer = (state: ProductsStateType = initialState, action: ActionType): ProductsStateType => {
  const { payload, type } = action;

  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...payload]
      }
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: payload
      }
    default:
      return state;
  }
}