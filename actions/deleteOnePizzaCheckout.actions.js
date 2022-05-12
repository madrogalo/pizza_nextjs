import { DELETE_ONE_PIZZA_CHECKOUT } from '../constants/checkout.type'

export const deleteOnePizzaCheckout = (data) => (dispatch) => 
dispatch({
  type: DELETE_ONE_PIZZA_CHECKOUT,
  payload: data,
})
