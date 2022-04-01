import './ProductCard.scss'
import Rating from '../Rating/Rating'

function ProductCard({ image, name, rating, price }) {
    return (
        <div className="card">
            <div style={{['--aspect']: '2.2' }}>
                <div className="card__img">
                    <img className="card-img-top" src={image} alt="Card image cap" />
                </div>
            </div>
            <div className="card__body">
                <p className="card-text">{name}</p>
                <div className="card__info">
                    <Rating  rate={rating}/> 
                    <div className="card__price">${price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard