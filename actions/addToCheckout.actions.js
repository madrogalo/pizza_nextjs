import { ADD_TO_CARD } from '../constants/checkout.type'

export const addToCheckout = (data) => (dispatch) =>
dispatch({
  type: ADD_TO_CARD,
  payload: data,
})

