import './Header.scss'
import '../InputSearch/InputSearch'
import InputSearch from '../InputSearch/InputSearch';
import { searchFilterChange } from '../slice/filtersSlice'
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    

    function handleSearchChange(search) {
        dispatch(searchFilterChange(search))
    }

    return (
        <header className="header fixed-top shadow">
            <a href="./" className="logo">
                <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" alt="logo" />
            </a>
            <a href="./" className="logo__name">amazing</a>
            <div className="header__search">
                <InputSearch 
                    placeholder="Search a product"
                    onSearchChange={handleSearchChange}
                />
            </div>
        </header> 
    );
}

export default Header