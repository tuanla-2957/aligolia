
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        params: {
            name_like: '',
            _limit: 16,
            _page: 1,
            type: [],
            brand: [],
            _sort: '',
            _order: '',
            categories: [],
            rating: null,
            price_gte: null,
            price_lte: null,
        },
        checked: [],
        currentCategory: '',
        brand_like: ''
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.params.name_like = action.payload
        },
        sortFilterChange: (state, action) => {
            state.params._sort = action.payload._sort
            state.params._order = action.payload._order
        },
        setPaginationChange: (state, action) => {
            state.params._page = action.payload
        },
        categoriesFilterChange: (state, action) => {
            state.params.categories = action.payload
        },
        checkTypesChange: (state, action) => {
            state.params.type = action.payload
        },
        checkBrandsChange: (state, action) => {
            state.params.brand = action.payload
        },
        checkRatingChange: (state, action) => {
            state.params.rating = action.payload
        },
        checkPriceRangeChange: (state, action) => {
            state.params.price_gte = action.payload.price_gte
            state.params.price_lte = action.payload.price_lte
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload
        },
        setChecked: (state, action) => {
            state.checked = action.payload
        },
        setSearchBrand: (state, action) => {
            state.brand_like = action.payload
        },
        resetParams: (state, action) => {
            state.params = action.payload
        },
    }
})

export
    const 
    { 
        setPaginationChange, 
        sortFilterChange, 
        searchFilterChange, 
        categoriesFilterChange, 
        checkTypesChange, 
        checkBrandsChange,
        checkRatingChange,
        checkPriceRangeChange,
        setCurrentCategory,
        setChecked,
        setSearchBrand,
        resetParams
    } = filtersSlice.actions

export default filtersSlice.reducer
