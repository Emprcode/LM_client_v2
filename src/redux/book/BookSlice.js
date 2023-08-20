import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  books: [],
  borrowedBooks: []

};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    setBookSuccess: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    setBorrowedBookSuccess: (state, action) => {
      state.isLoading = false;
      state.borrowedBooks = action.payload;
    },
 
  },
});

const { reducer, actions } = bookSlice;

export const { requestPending, setBookSuccess, getBorrowedBookSuccess } = actions;

export default reducer;
