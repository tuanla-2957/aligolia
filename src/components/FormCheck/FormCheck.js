import './FormCheck.scss'

function FormCheck({data}) {
    return (
        data.map((item, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" type="checkbox" value="" id={item.name} />
                    <label className="form-check-label" htmlFor={item.name}>
                        {item.name}
                        <span className="refinement__quantity">({item.quantity})</span>
                    </label>
                </div>
            )
        })
    )
}

export default FormCheck