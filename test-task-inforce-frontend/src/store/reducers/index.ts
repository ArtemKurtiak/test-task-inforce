import { combineReducers } from 'redux';
import {productsReducer} from "./products.reducer";

export const rootReducer = combineReducers({
  products: productsReducer
})

export type RootState = ReturnType<typeof rootReducer>;