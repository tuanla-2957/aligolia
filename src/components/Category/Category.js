import { useState } from 'react'
import './Category.scss'
import { useStore, actions } from '../../store';

function Category({ category }) {
    const [state, dispatch] = useStore()
    const { params } = state
    const [isOpen, setIsOpen] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('')

    function handleClickCategory(category) {
        setIsOpen(prevState => !prevState)
        setCurrentCategory(category)
        const newParams = {
            ...params,
            "hierarchicalCategories.lvl0": category
        }
        dispatch(actions.getParamProducts(newParams))
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
                <ul className={ isOpen ? 'category--open ms-2' : 'category--close ms-2' }>
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