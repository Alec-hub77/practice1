import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartReducer } from "../cart/cart.slice";
import { productApi } from '../sevices/productApi'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath] : productApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>




