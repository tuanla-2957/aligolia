import './FormCheck.scss'
import { useDispatch, useSelector } from 'react-redux';
import {setChecked} from '../slice/filtersSlice'

function FormCheck({data, handleCheck}) {
    const check = useSelector(state => state.filters.checked)
    const dispatch = useDispatch()
    function handleCheckBox(event) {
        let { name, checked } = event.target
        const isChecked = check.includes(name)
        if (isChecked) {
            dispatch(setChecked(check.filter(item => item !== name)))
        } else {
            dispatch(setChecked([...check, name]))
        }
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
                        checked={check.includes(item.name)}
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