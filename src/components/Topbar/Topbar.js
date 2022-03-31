import './Topbar.scss'


function TopBar({totalResult}) {
    return (
        <div className="topbar">
            <div className="topbar__text">{totalResult} results in 1ms</div>
            <div className="topbar__sort">
                <span className='mx-2'>Sort by</span>
                <select name="" id="">
                    <option value="Featured">Featured</option>
                    <option value="Price asc">Price asc</option>
                    <option value="Price desc">Price desc</option>
                </select>
            </div>
        </div>
    );
}

export default TopBar