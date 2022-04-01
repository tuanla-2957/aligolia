import './InputSearch.scss'

function InputSearch ({ placeholder }) {
    return (
        <div className="input-group input-search">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder={placeholder}
                    autoComplete="off" />
            </div>
            <button type="button" className="btn search__icon">
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}

export default InputSearch