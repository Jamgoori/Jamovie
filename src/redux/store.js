import * as actionCreators from "./actions/movieActions";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
