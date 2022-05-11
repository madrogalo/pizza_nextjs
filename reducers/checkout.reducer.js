
import { ADD_TO_CHECKOUT, DELLETE_FROM_CHECKOUT, CLEARE_CHECKOUT } from '../constants/checkout.type'

const checkoutReducer = (state = [], { type, payload }) => {
  switch(type) {
    case ADD_TO_CHECKOUT:
      const updatedQuantityState = state;
      updatedQuantityState.some((item) => {
        if(item.id === payload.id) {
            item.quantity += payload.quantity
            item.price += payload.price
        }
      })
      const searchEqualId = state.some((item) => item.id === payload.id)
      if(searchEqualId) {
        return [...updatedQuantityState]
      } else {
        return [payload, ...state]
      }

    case DELLETE_FROM_CHECKOUT:
      return state.filter(pizza => pizza.id !== payload)
    case CLEARE_CHECKOUT:
      return []
    default:
      return state
  }
}

export default checkoutReducer