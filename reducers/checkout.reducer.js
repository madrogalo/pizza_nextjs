
import { ADD_TO_CARD, DELLETE_FROM_CHECKOUT, CLEARE_CHECKOUT } from '../constants/checkout.type'

const checkoutReducer = (state = [], { type, payload }) => {
  switch(type) {
    case ADD_TO_CARD:
      return [payload, ...state]
    case DELLETE_FROM_CHECKOUT:
      return state.filter(pizza => pizza.id !== payload)
    case CLEARE_CHECKOUT:
      return []
    default:
      return state
  }
}

export default checkoutReducer