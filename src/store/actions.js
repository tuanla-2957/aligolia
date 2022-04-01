import { FETCH_ALL_PRODUCTS, FETCH_LIST_PRODUCTS,  GET_PARAM_PRODUCTS } from './constants'

export const fetchAllProducts = payload => ({
    type: FETCH_ALL_PRODUCTS,
    payload
})

export const fetchListProducts = payload => ({
    type: FETCH_LIST_PRODUCTS,
    payload
})

export const getParamProducts = payload => ({
    type: GET_PARAM_PRODUCTS,
    payload
})