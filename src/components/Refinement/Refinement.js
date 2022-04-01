import './Refinement.scss'
import React, { useState } from 'react';
import FormCheck from '../FormCheck/FormCheck';
import InputSearch from '../InputSearch/InputSearch';
import Rating from '../Rating/Rating';
import { useStore, actions } from '../../store';

function Refinement ({title, data}) {

    const [state, dispatch] = useStore()
    const { params } = state 
    const [gte, setGte] = useState(0)
    const [lte, setLte] = useState(0)

    function priceRangeOnClick(price) {
        if (price.indexOf("-") === -1 ) {
            handlePriceRange(Number(price.slice(2)), 10000)
        } else {
            handlePriceRange(Number(price.slice(0, price.indexOf("-"))), Number(price.slice(price.indexOf("-")+1)))
        }    
    }

    function ratingOnClick(rate) {
        const newParams = {
            ...params,
            rating: Number(rate)
        }
        dispatch(actions.getParamProducts(newParams))
    }

    function handlePriceRange(prev, next) {
        dispatch(actions.getParamProducts({
                ...params,
                price_gte: prev,
                price_lte: next
        }))
    }

    function handleCheckBrand(name, checked) {
        dispatch(actions.getParamProducts({
            ...params,
            brand: handleCheckBox(name, checked)
        }))
    }

    function handleCheckType(name, checked) {
            
            dispatch(actions.getParamProducts({
                ...params,
                type: handleCheckBox(name, checked)
            }))
    }

    function handleCheckBox(name, checked) {
            if(checked) {
                return [...params.type, name]
            } else {
                return  params.type.filter(value => value !== name)
            }
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
                        <InputSearch placeholder="Search for other"/>
                    </div>
                    <div className="refinement__list">
                        <FormCheck data={data} handleCheck={handleCheckBrand}/>
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