import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import productsReducer from '../components/slice/productsSlice'
import filtersReducer from '../components/slice/filtersSlice'

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store