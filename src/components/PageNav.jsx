import React, { useState, useEffect } from 'react';

export default function PageNav(props) {
    const { totalPages, currentPage, handleChangePage, handleNextPage, handlePreviousPage } = props;
    const pageArr = [];

    for (let i = 1; i <= totalPages; i++) {
        pageArr.push(i);
    }

    return (
        <>
            <div className="page-nav">
                <img className="xs-icon" src="public/prev-icon.png" onClick={handlePreviousPage}/>

                <ul className="page-num">
                    {pageArr.map(page => (
                        <li key={page} className={ page === currentPage ? "selected-page" : ""} onClick={() => {
                            handleChangePage(page);
                        }}>{page}</li>
                    ))}
                </ul>

                <img className="xs-icon" src="public/next-icon.png" onClick={handleNextPage}/>
            </div>
        </>

    );
}