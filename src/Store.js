import {configureStore} from '@reduxjs/toolkit'
import userReducer from './redux/user/UserSlice.js'
import BookReducer from './redux/book/BookSlice.js'

const store = configureStore({
    reducer: {
        user: userReducer,
        book: BookReducer
    }
})

export default store