import './Header.scss'
import '../InputSearch/InputSearch'
import InputSearch from '../InputSearch/InputSearch';

function Header() {
    return (
        <header className="header fixed-top shadow">
            <a href="./" className="logo">
                <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" alt="logo" />
            </a>
            <a href="./" className="logo__name">amazing</a>
            <div className="header__search">
                <InputSearch placeholder="Search a product"/>
            </div>
        </header> 
    );
}

export default Header