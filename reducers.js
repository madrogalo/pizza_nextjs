import { combineReducers } from 'redux'
import pizzaMenu from './reducers/pizzaMenu.reducer'
import checkoutReducer from './reducers/checkout.reducer'


// COMBINED REDUCERS
const reducers = {
  pizza: pizzaMenu,
  checkout: checkoutReducer
}

export default combineReducers(reducers)