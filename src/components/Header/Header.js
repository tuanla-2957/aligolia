import './Header.scss'
import '../InputSearch/InputSearch'
import InputSearch from '../InputSearch/InputSearch';
import { useStore, actions } from '../../store';

function Header() {
    const [state, dispatch] = useStore()
    const { params } = state

    function handleSearchChange(search) {
        const newParams = {
            ...params,
            _page: 1,
            q: search
        }
        dispatch(actions.getParamProducts(newParams))
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
                    search={params.q || ""}
                    onSearchChange={handleSearchChange}
                />
            </div>
        </header> 
    );
}

export default Header