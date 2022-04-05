import './Content.scss'
import TopBar from '../Topbar/Topbar'
import Products from '../Products/Products';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore, actions } from '../../store';

function Content() {
    const initPaging = {
        _page: 1,
        _limit: 16
    }
    const [pagination, SetPagination] = useState(initPaging)
    const [state, dispatch] = useStore()
    const { products, params } = state



    useEffect(() => {
        const url = `http://localhost:3000/products`
        axios.get(url, {params})
            .then(res => {
                dispatch(actions.fetchListProducts(res.data.data || []))
                SetPagination(res.data.pagination)
            })
            .catch(error => console.log(error));
    }, [params])

    function handlePageChange(newPage) {
        const newParams = {
            ...params,
            _page: newPage
        }
        dispatch(actions.getParamProducts(newParams))
    }

    function handleSortProduct(sortValue) {
        const newParams = {
            ...params,
            _sort: "price",
            _order: sortValue
        }
        dispatch(actions.getParamProducts(newParams))
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