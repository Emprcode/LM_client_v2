import {configureStore} from '@reduxjs/toolkit'
import userReducer from './redux/user/UserSlice.js'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store