import './Category.scss'

function Category({data, children}) {
    return(
        <ul>
            {data.map((category, index) => children(category, index))}
        </ul>
    )
}

export default Category