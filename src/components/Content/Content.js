import './Content.scss'
import TopBar from '../Topbar/Topbar'
import Products from '../Products/Products';
import Pagination from '../Pagination/Pagination';
import { useEffect } from 'react';
import { getProducts } from '../slice/productsSlice'
import { setPaginationChange, sortFilterChange } from '../slice/filtersSlice'
import { useDispatch, useSelector } from 'react-redux';

function Content() {
    const products = useSelector(state => state.products.list)
    const pagination = useSelector(state => state.products.pagination)
    const params = useSelector(state => state.filters.params)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(params))
    }, [dispatch, params])

    function handlePageChange(newPage) {
        dispatch(setPaginationChange(newPage))
    }

    function handleSortProduct(sortValue) {
        if(sortValue) {
            dispatch(sortFilterChange({
                _sort: 'price',
                _order: sortValue
            }))
        } else {
            dispatch(sortFilterChange({
                _sort: '',
                _order: ''
            }))
        }
    }

    return (
        <div className="results-wrapper">
            <div className="results">
                <TopBar
                    totalResult={pagination._totalRows}
                    onSortChange={handleSortProduct}
                />
                <div className="products">
                    <div className="row">
                        <Products className='product col-md-6 col-lg-3' products={products} />
                    </div>
                </div>
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>

    )
}

export default Content