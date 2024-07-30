import React from 'react';
import { returnPagination } from './utils';
 type paginationProps={
    totalPage:number,
    page:number,
    limits:number,
    siblings:number,
    handleChange:(item:number|string)=>void
 }
const Pagination = ({ totalPage, page, limits, siblings, handleChange }:paginationProps ) => {
    const arr = returnPagination(totalPage, page,  siblings)
    return (
        <div className='flex justify-center'>
            <div>
                <ul className='pag flex    '>
                    <li onClick={(e) => handleChange(page-1)} className='border p-2'>
                        <button>prev</button>
                    </li>
                    {
                        arr.map((item, index) => <li className={`${'border p-2'} ${page==item?'bg-green-500':''}`}  key={index}> 
                        <button   onClick={(e) => handleChange(item)}>{item}</button>
                        </li>)
                    }
                    <li onClick={(e) => handleChange(page+1)} className='border p-2'>
                        <button>next</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;