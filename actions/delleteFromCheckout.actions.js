import { DELLETE_FROM_CHECKOUT } from '../constants/checkout.type'

export const delleteFromCheckout = (id) => (dispatch) =>
dispatch({
  type: DELLETE_FROM_CHECKOUT,
  payload: id,
})

