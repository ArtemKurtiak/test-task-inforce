import {Dispatch} from 'redux';
import {SET_CURRENT_PRODUCT, SET_PRODUCTS} from "../actions";
import {getApiService} from "../../services/api.service";

export const getProductsActionCreator = () => async (dispatch: Dispatch) => {
  const response = await getApiService('products')

  dispatch({type: SET_PRODUCTS, payload: response.data});
}

export const getCurrentProduct = (id: string) => async (dispatch: Dispatch) => {
  const response = await getApiService(`products/${id}`);

  dispatch({type: SET_CURRENT_PRODUCT, payload: response.data});
}