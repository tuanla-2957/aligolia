import './Rating.scss'

function Rating({rate}) {
    if(Number(rate)<= 5) { 
        return (
            <div className="rating__star">
                {[...Array(5)].map((_, index) => index < Number(rate) ? <i className="fas fa-star" key={index}></i> :  <i className="far fa-star" key={index}></i>)}
            </div>
        )
    } else {
        return false
    }
}

export default Rating