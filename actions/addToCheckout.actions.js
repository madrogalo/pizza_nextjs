import { ADD_TO_CHECKOUT } from '../constants/checkout.type'

export const addToCheckout = (data) => (dispatch) => 
dispatch({
  type: ADD_TO_CHECKOUT,
  payload: data,
})
