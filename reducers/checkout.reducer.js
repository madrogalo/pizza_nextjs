
import { ADD_TO_CARD } from '../constants/checkout.type'

const checkoutReducer = (state = [], {type, payload }) => {
  switch(type) {
    case ADD_TO_CARD:
      return [...state, payload]
    default:
      return state
  }
}

export default checkoutReducer