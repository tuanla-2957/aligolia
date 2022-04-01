import './Topbar.scss'
import PropTypes from 'prop-types'
import { React } from 'react';

TopBar.propTypes = {
    totalResult: PropTypes.number,
    onSortChange: PropTypes.func
}

TopBar.defaultProps = {
    onSortChange: null
}

function TopBar(props) {
    const { totalResult, onSortChange } = props
    const options = [
        {
            id: 1,
            label: "Featured",
            value: ""
        },
        {
            id: 2,
            label: "Price asc",
            value: "asc"
        },
        {
            id: 3,
            label: "Price desc",
            value: "desc"
        }
    ]

    const handleSortChange = (e) => {
        onSortChange && onSortChange(e.target.value)
    }

    return (
        <div className="topbar">
            <div className="topbar__text">{totalResult} results in 1ms</div>
            <div className="topbar__sort">
                <span className='mx-2'>Sort by</span>
                <select onChange={handleSortChange}>
                    {
                        options.map((option) => (
                                <option
                                    value={option.value}
                                    key={option.id}
                                >
                                    {option.label}
                                </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default TopBar