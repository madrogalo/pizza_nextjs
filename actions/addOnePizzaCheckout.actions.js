import { ADD_ONE_PIZZA_CHECKOUT } from '../constants/checkout.type'

export const addOnePizzaCheckout = (data) => (dispatch) => 
dispatch({
  type: ADD_ONE_PIZZA_CHECKOUT,
  payload: data,
})
