import './SideBar.scss'
import Category from '../Category/Category';
import Refinement from '../Refinement/Refinement';
import { categories } from '../Category/categories';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../slice/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { resetParams, setCurrentCategory, setChecked } from '../slice/filtersSlice'

function SideBar() {
    const dispatch = useDispatch();
    const params = useSelector(state => state.filters.params)
    const [isFilterChange, setIsFilterChange] = useState(false)
    const allProducts = useSelector(state => state.products.listAll)
    const searchBrand = useSelector(state => state.filters.brand_like)
    const typeList = [...(new Set(allProducts.map((product) => product.type)))].slice(0,5)
    const brandList = [...(new Set(allProducts.map((product) => product.brand)))].slice(0,5)
    const prices = [...(new Set(allProducts.map((product) => product.price_range)))].sort()
    const rates = [4,3,2,1]
    const initParams = {
        q: '',
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
    }

    const types = typeList.map( (item, index) => {
        return {
            id: index,
            name: item,
            quantity: allProducts.reduce((total, product) => {
                if (product.type === item) {
                    return total + 1
                }
                return total
            }, 0)
        }
    })
    const brands = brandList.map( (item, index) => {
        return {
            id: index,
            name: item,
            quantity: allProducts.reduce((total, product) => {
                if (product.brand === item) {
                    return total + 1
                }
                return total
            }, 0)
        }
    })

    const ratings = rates.map( (item, index) => {
        return {
            id: index,
            rate: item,
            quantity: allProducts.reduce((total, product) => {
                if (product.rating === item) {
                    return total + 1
                }
                return total
            }, 0)
        }
    })

    console.log("first", searchBrand)

    useEffect(() => {
        dispatch(getAllProducts({   brand_like: searchBrand }))
    }, [dispatch, searchBrand])

    useEffect(() => {
        setIsFilterChange(true)
    }, [params])

    function clearFilterOnClick() {
        setIsFilterChange(false)
        dispatch(resetParams(initParams))
        dispatch(setCurrentCategory(''))
        dispatch(setChecked([]))
    }

    return (
        <aside className="side-bar">
            <div className={ isFilterChange ? "clear-filter d-block" : "d-none"}>
                <button className='btn btn-outline-secondary button__clear' onClick={clearFilterOnClick}>
                    Clear Filter
                </button>
            </div>
            <div className="facet">
                <div className="facet__title">Show result for</div>
                <div className="categories">
                    {categories.map((category, index) => <Category category={category} key={index} />)}
                </div>
            </div>
            <div className="facet">
                <div className="facet__title">Refine By</div>
                <div className="refinement type">
                    <Refinement title='Type' data={types} />
                </div>

                <div className="refinement Brand">
                    <Refinement title='Brand' data={brands} />
                </div>

                <div className="refinement type">
                    <Refinement title='Ratings' data={ratings} />
                </div>

                <div className="refinement Prices">
                    <Refinement title='Prices' data={prices} />
                </div>
            </div>
            <div className="side-bar__other">
                Data courtery of Best Buy
            </div>
        </aside>
    );
}

export default SideBar