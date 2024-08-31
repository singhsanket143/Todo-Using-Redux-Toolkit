import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    devTools: true
});

export default store;