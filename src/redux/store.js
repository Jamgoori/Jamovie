import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/movieReducer';
import movieDetailReducer from './reducers/movieDetailReducer';
import modalReducer from "./reducers/modalReducer";

const store = configureStore({
    reducer:{
        movie : movieReducer,
        detail : movieDetailReducer,
        modal : modalReducer
    }
})

export default store;