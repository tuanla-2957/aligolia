import './SideBar.scss'
import Category from '../Category/Category';
import Refinement from '../Refinement/Refinement';
import { Fragment, useEffect } from "react";
import axios from 'axios';
import { useStore, actions } from '../../store';
import { categories } from '../Category/categories';

function SideBar() {
    const [state, dispatch] = useStore()
    const { allProducts, params } = state
    const typeList = [...(new Set(allProducts.map((product) => product.type)))].slice(0,5)
    const brandList = [...(new Set(allProducts.map((product) => product.brand)))].slice(0,5)
    const prices = [...(new Set(allProducts.map((product) => product.price_range)))].sort()
    const rates = [4,3,2,1]

    const types = typeList.map( (item, index) => {
        return {
            id: index,
            name: item,
            quantity: allProducts.reduce((total, product) => {
                if (product.type === item) {
                    return total + 1
                }
                return total
            }, 0)
        }
    })
    const brands = brandList.map( (item, index) => {
        return {
            id: index,
            name: item,
            quantity: allProducts.reduce((total, product) => {
                if (product.brand === item) {
                    return total + 1
                }
                return total
            }, 0)
        }
    })

    const ratings = rates.map( (item, index) => {
        return {
            id: index,
            rate: item,
            quantity: allProducts.reduce((total, product) => {
                if (product.rating === item) {
                    return total + 1
                }
                return total
            }, 0)
        }
    })





    useEffect(() => {
        const url = `http://localhost:3000/products`
        axios.get(url)
            .then(res => {
                dispatch(actions.fetchAllProducts(res.data.data || []))
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <aside className="side-bar">
            <div className="clear-filter"></div>
            <div className="facet">
                <div className="facet__title">Show result for</div>
                <div className="categories">
                    {categories.map((category, index) => <Category category={category} key={index} />)}
                </div>
            </div>
            <div className="facet">
                <div className="facet__title">Refine By</div>
                <div className="refinement type">
                    <Refinement title='Type' data={types} />
                </div>

                <div className="refinement Brand">
                    <Refinement title='Brand' data={brands} />
                </div>

                <div className="refinement type">
                    <Refinement title='Ratings' data={ratings} />
                </div>

                <div className="refinement Prices">
                    <Refinement title='Prices' data={prices} />
                </div>
            </div>
            <div className="side-bar__other">
                Data courtery of Best Buy
            </div>
        </aside>
    );
}

export default SideBar