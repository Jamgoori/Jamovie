import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/movieReducer';
import movieDetailReducer from './reducers/movieDetailReducer';

const store = configureStore({
    reducer:{
        movie : movieReducer,
        detail : movieDetailReducer
    }
})

export default store;