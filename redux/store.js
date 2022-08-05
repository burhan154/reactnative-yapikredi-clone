import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bottomReducer } from "./modules/bottom/reducer";


const combinedReducers = combineReducers({
  bottom : bottomReducer,

});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}