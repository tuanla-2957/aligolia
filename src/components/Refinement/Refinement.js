import './Refinement.scss'
import FormCheck from '../FormCheck/FormCheck';
import InputSearch from '../InputSearch/InputSearch';
import Rating from '../Rating/Rating';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { checkTypesChange, checkBrandsChange, checkRatingChange, checkPriceRangeChange, setSearchBrand} from '../slice/filtersSlice'

function Refinement ({title, data}) {
    const params = useSelector(state => state.filters.params)
    const dispatch = useDispatch();
    const [gte, setGte] = useState(0)
    const [lte, setLte] = useState(0)

    function handleCheckBrand(name, checked) {
        if (checked) {
            dispatch(checkBrandsChange([...params.brand, name]))
        } else {
            dispatch(checkBrandsChange(params.brand.filter(value => value !== name)))
        }
    }

    function handleCheckType(name, checked) {
        if (checked) {
            dispatch(checkTypesChange([...params.type, name]))
        } else {
            dispatch(checkTypesChange(params.type.filter(value => value !== name)))
        }
    }

    function ratingOnClick(rate) {
        dispatch(checkRatingChange(Number(rate)))
    }

    function priceRangeOnClick (price) {
        if (price.indexOf("-") === -1 ) {
            handlePriceRange(Number(price.slice(2)), 10000)
        } else {
            handlePriceRange(Number(price.slice(0, price.indexOf("-"))), Number(price.slice(price.indexOf("-")+1)))
        } 
    }

    function handlePriceRange(prev, next) {
        const priceRange = {
            price_gte: prev,
            price_lte: next
        }
        dispatch(checkPriceRangeChange(priceRange))
    }

    function handleSearchChange(search) {
        dispatch(setSearchBrand(search))
    }

    switch (title) {
        case 'Type':
            return (
                <>
                    <span className="refinement__title">{title}</span>
                    <div className="refinement__list">
                    <FormCheck data={data} handleCheck={handleCheckType}/>
                    </div>
                </>
            )
        case 'Brand': 
            return (
                <>
                    <span className="refinement__title">{title}</span>
                    <div className='refinement__search my-2'>
                        <InputSearch placeholder="Search for other" onSearchChange={handleSearchChange}/>
                    </div>
                    <div className="refinement__list">
                        <FormCheck data={data} handleCheck={handleCheckBrand} />
                    </div>
                </>
            )
        case 'Ratings':
            return (
                data.map((item, index)=> {
                    return (
                        <li className="refinement__item rating" key={item.id} onClick={() => ratingOnClick(item.rate) }>
                            <Rating  rate={item.rate}/> 
                            <div className="rating__count">& UP {item.quantity}</div>
                        </li>
                    )
                })
            )
        case 'Prices':
            return (
                <>
                    {data.map((item, index)=> {
                        return (
                            <li className="refinement__item price" key={index} onClick={() => priceRangeOnClick(item) }>
                                {item}
                            </li>
                        )
                    })}
                    <div className="price__range my-1">
                        <span className="text-bold">$</span>
                        <input className="input" type="number" value={gte} onChange={e => setGte(e.target.value)}/>
                        <span>to</span>
                        <span className="text-bold">$</span>
                        <input className="input" type="number" value={lte} onChange={e => setLte(e.target.value)}/>
                        <button className="button-circle" onClick={() => handlePriceRange(gte, lte)}>go</button>
                    </div>
                </>
            )
        default:
            break;
    }
}

export default Refinement