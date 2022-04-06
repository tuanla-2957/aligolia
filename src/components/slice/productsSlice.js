import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (params) => {
        const url = `http://localhost:3000/products`
        const data = await axios.get(url, {params})
            .then(res => {
                return res.data
            })
            .catch(error => console.log(error));
        return data
    }
)

export const getAllProducts = createAsyncThunk(
    'allProducts/getAllProducts',
    async (params) => {
        const url = `http://localhost:3000/products`
        const data = await axios.get(url, {params})
            .then(res => {
                return res.data
            })
            .catch(error => console.log(error));
        return data
    }
)

const productsSlice =  createSlice({
    name: 'products',
    initialState: {
        list: [],
        listAll: [],
        pagination: {},
        status: null
    },
    extraReducers: {
        [getProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled] : (state, { payload }) => {
            state.list = payload.data
            state.pagination = payload.pagination
            state.status = 'success'
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed'
        },

        [getAllProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getAllProducts.fulfilled] : (state, { payload }) => {
            state.listAll = payload.data
            state.status = 'success'
        },
        [getAllProducts.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})


export default productsSlice.reducer