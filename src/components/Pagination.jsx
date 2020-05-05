import React from 'react';
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>
            { pageNumbers.map(number => (
                <button key={number} onClick={() => paginate(number)} className="btn-floating btn-small waves-effect waves-light light-green btn right">
                    {number}
                </button>
            ))}
            {/* <button onClick={() => deleteFood(selectedFood)} className="btn-floating btn-small waves-effect waves-light light-green btn right">
                <i className="material-icons">delete</i>
            </button> */}
        </div>
    )
}

export default Pagination;