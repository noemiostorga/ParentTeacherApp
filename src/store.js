import { createStore, combineReducers } from 'redux';

// import reducers here
import reducer from 'reducers/reducer.js'
// combine reducers
const reducers = combineReducers({
  // put reducers here
  	reducer
})

// crerate the store
export default createStore(reducers);