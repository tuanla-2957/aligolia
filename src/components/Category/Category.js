import { useState } from 'react'
import './Category.scss'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesFilterChange,setCurrentCategory } from '../slice/filtersSlice'

function Category({ category }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)
    const currentCategory = useSelector(state => state.filters.currentCategory)

    function handleClickCategory(category) {
        setIsOpen(prevState => !prevState)
        dispatch(setCurrentCategory(category))
        dispatch(categoriesFilterChange(category))
    }

    if(category.childrens) {
        return(
            <>
                <ul>
                    <li 
                        className={ currentCategory === category.title ? "category__item category--active" : "category__item" } 
                        onClick={() => handleClickCategory(category.title)}
                    >
                        <i className="fa fa-angle-right"></i>
                        {category.title}
                    </li>
                </ul>
                <ul className={ isOpen && currentCategory === category.title ? 'category--open ms-2' : 'category--close ms-2' }>
                    {category.childrens.map((item,index) => <Category  category={item} key={index} />)}
                </ul>
            </>
        )
    } 
    return(
        <ul>
            <li 
                className={ currentCategory === category.title ? "category__item category--active" : "category__item" } 
                onClick={() => handleClickCategory(category.title)}
            >
                <i className="fa fa-angle-right"></i>
                {category.title}
            </li>
        </ul>
    )
}

export default Category