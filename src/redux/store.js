// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// let store = createStore(rootReducer, applyMiddleware(thunk));
// import rootReducer from "./reducers";

import movieReducer from './reducers/movieReducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        movie : movieReducer,
    }
})

export default store;