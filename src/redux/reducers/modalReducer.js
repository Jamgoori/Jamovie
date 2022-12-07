import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    show: "NO",
    mode: ""
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state) => {
            state.show = "YES";
          },
          notShowModal: (state) => {
            state.show = "NO";
          },
          changeMode: (state, action) => {
            state.mode = action.payload;
          },
    },
})

export const { showModal, notShowModal, changeMode } = modalSlice.actions;
export default modalSlice.reducer;