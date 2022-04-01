import './Refinement.scss'
import React from 'react';
import FormCheck from '../FormCheck/FormCheck';
import InputSearch from '../InputSearch/InputSearch';
import Rating from '../Rating/Rating';

function Refinement ({title, data}) {
    switch (title) {
        case 'Type':
            return (
                <>
                    <span className="refinement__title">{title}</span>
                    <div className="refinement__list">
                        <FormCheck data={data} />
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
                        <FormCheck data={data} />
                    </div>
                </>
            )
        case 'Ratings':
            return (
                data.map((item, index)=> {
                    return (
                        <a className="refinement__item rating" key={index}>
                            <Rating  rate={item.rate}/> 
                            <div className="rating__count">& UP {item.quantity}</div>
                        </a>
                    )
                })
            )
        case 'Prices':
            return (
                <>
                    {data.map((item, index)=> {
                        return (
                            <a className="refinement__item price" key={index}>
                                {item}
                            </a>
                        )
                    })}
                    <div className="price__range my-1">
                        <span className="text-bold">$</span>
                        <input className="input" type="number" />
                        <span>to</span>
                        <span className="text-bold">$</span>
                        <input className="input" type="number" />
                        <button className="button-circle">go</button>
                    </div>
                </>
            )
        default:
            break;
    }
}

export default Refinement