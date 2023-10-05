import { combineReducers, configureStore } from "redux";

// reducer
import todoReducer from '../reducers/reducer';

// combine reducer
const rootReducer = combineReducers({
  todo: todoReducer
})

const store = configureStore(rootReducer)

export default store;