import './Content.scss'
import TopBar from '../Topbar/Topbar'
import Products from '../Products/Products';
import Pagination from '../Pagination/Pagination';

function Content() {
    const totalResult = 21469;
    const currentPage = 1;
    const totalPage = 7;
    const products = [
        {
            name: "Sharp - 50 Class (49.5 Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black",
            rate: 0,
            price: 999.99,
            src: "https://cdn-demo.algolia.com/bestbuy-0118/3602009_sb.jpg"
        },
        {
            name: "Sharp - 50 Class (49.5 Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black",
            rate: 5,
            price: 999.99,
            src: "https://cdn-demo.algolia.com/bestbuy-0118/3602009_sb.jpg"
        },
        {
            name: "Sharp - 50 Class (49.5 Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black",
            rate: 2,
            price: 999.99,
            src: "https://cdn-demo.algolia.com/bestbuy-0118/3602009_sb.jpg"
        },
        {
            name: "Sharp - 50 Class (49.5 Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black",
            rate: 1,
            price: 999.99,
            src: "https://cdn-demo.algolia.com/bestbuy-0118/3602009_sb.jpg"
        }
    ]
    return (
        <div className="results-wrapper">
            <div className="results">
                <TopBar totalResult={totalResult}/>
                <div className="products">
                    <div className="row">
                        <Products className='product col-md-6 col-lg-3' products={products}/>
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPage={totalPage}  />
            </div>
        </div>

    )
}

export default Content