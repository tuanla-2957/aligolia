import './Products.scss'
import ProductCard from '../ProductCard/ProductCard'

function Products({className, products}) {
    return (
        products.map((product, index) => {
            return (
                <div className={className} key={index}>
                    <ProductCard  product={product}/>
                </div>
                
            )
        })
    )
}

export default Products