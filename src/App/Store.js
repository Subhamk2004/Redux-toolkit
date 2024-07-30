import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../Features/TodoSlice.js";

// above and below we have made a store, and it is made just like this only
// and it is it's syntax don't cry or complain

export const store = configureStore({
    reducer: todoReducer
})

// first we make, Store then ---> Reducers then--->

// there (reducers) in redux-toolkit are called (Slicers)

// store is just like the global variable or the context where we store our
// data for every component to access

// go to the below link for more details:
//https://redux-toolkit.js.org/introduction/getting-started