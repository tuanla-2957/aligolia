import './ProductCard.scss'
import Rating from '../Rating/Rating'

function ProductCard({product}) {
    return (
        <div className="card">
            <div style={{['--aspect']: '2.2' }}>
                <div className="card__img">
                    <img className="card-img-top" src={product.src} alt="Card image cap" />
                </div>
            </div>
            <div className="card__body">
                <p className="card-text">{product.name}</p>
                <div className="card__info">
                    <Rating  rate={product.rate}/> 
                    <div className="card__price">${product.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard