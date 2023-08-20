import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.error = {}
      state.isLoggedIn = true;

    },
    requestFailed : (state, action)=> {
      state.isLoading = false;
      state.error = action.payload
    }
  },
});

const { reducer, actions } = userSlice;

export const { requestPending, loginSuccess, requestFailed } = actions;

export default reducer;
