import './FormCheck.scss'

function FormCheck({data, handleCheck}) {

    function handleCheckBox(event) {
        const { name, checked } = event.target
        handleCheck(name, checked)
    }

    return (
        data.map((item, index) => {
            return (
                <div className="form-check" key={item.id}>
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={item.name}
                        name={item.name}
                        id={item.name}
                        onChange={handleCheckBox}
                    />
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