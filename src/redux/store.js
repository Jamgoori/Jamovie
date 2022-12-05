import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/movieReducer';
import movieDetailReducer from './reducers/movieDetailReducer';
import movieFilterReducer from "./reducers/movieFilterReducer";

const store = configureStore({
    reducer:{
        movie : movieReducer,
        detail : movieDetailReducer,
        filter : movieFilterReducer
    }
})

export default store;