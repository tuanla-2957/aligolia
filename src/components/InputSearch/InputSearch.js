import './InputSearch.scss'
import PropTypes from 'prop-types'

InputSearch.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func
}

InputSearch.defaultProps = {
    onSearchChange: null
}

function InputSearch (props) {
    const { placeholder , onSearchChange } = props

    function handleSearch(event) {
        onSearchChange && onSearchChange(event.target.value)
    }

    return (
        <div className="input-group input-search">
            <div className="form-outline">
                <input 
                    type="search" 
                    id="form1" className="form-control" 
                    placeholder={placeholder}
                    onChange={handleSearch}
                    autoComplete="off" />
            </div>
            <button type="button" className="btn search__icon">
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}

export default InputSearch