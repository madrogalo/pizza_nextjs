import { combineReducers } from 'redux'
import pizzaMenu from './reducers/pizzaMenu.reducer'
import checkoutReducer from './reducers/checkout.reducer'
import { ADD_TO_CHECKOUT } from './constants/checkout.type'


export const checkoutAsync = () => (dispatch, getState) => {
  
}


// COMBINED REDUCERS
const reducers = {
  pizza: pizzaMenu,
  checkout: checkoutReducer
}

export default combineReducers(reducers)