import { CLEARE_CHECKOUT } from '../constants/checkout.type'

export const cleareCheckout = () => (dispatch) =>
dispatch({
  type: CLEARE_CHECKOUT,
})

