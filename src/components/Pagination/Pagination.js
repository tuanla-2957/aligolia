import './Pagination.scss'
import React from 'react';

function Pagination({currentPage, totalPage}) {
    return (
        <ul className="pagination">
            <li className="pagination__link page--disable">
                <i className="fas fa-angle-left"></i>
                Previous page
            </li>
            {[...Array(Number(totalPage))].map((pageNumber, index) => {        
            return (         
                <li className="pagination__link" key={index}>{index + 1}</li>  
                );
            })}
            <li className="pagination__link">Next page</li>
        </ul>
    );
}

export default Pagination