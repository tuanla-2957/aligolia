import './Content.scss'
import TopBar from '../Topbar/Topbar'
import Products from '../Products/Products';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Content() {
    const initPaging = {
        _page: 1,
        _limit: 16
    }
    const [pagination, SetPagination] = useState(initPaging)
    const [params, setParams] = useState(initPaging)
    const [products, setProducts] = useState([])



    useEffect(() => {
        const url = `http://localhost:3000/products`
        axios.get(url, {params})
            .then(res => {
                setProducts(res.data.data || [])
                SetPagination(res.data.pagination)
            })
            .catch(error => console.log(error));
    }, [params])

    function handlePageChange(newPage) {
        setParams({
            ...params,
            _page: newPage
        })
    }

    function handleSortProduct(sortValue) {
        setParams({
            ...params,
            _sort: "price",
            _order: sortValue
        })
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