import { FETCH_ALL_PRODUCTS, FETCH_LIST_PRODUCTS,  GET_PARAM_PRODUCTS } from './constants'

const initState = {
    products: [],
    params: {
        _page: 1,
        _limit: 16,
        type: [],
        brand: [],
    },
    allProducts: []
}

function reducer(state, action) {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
        case FETCH_LIST_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PARAM_PRODUCTS:
            return {
                ...state,
                params: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer