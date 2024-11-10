import { useState, cloneElement } from "react";

export default function Pagination(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    function getCurrentItems(data, itemsPerPage) {
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }
    
    const handleChangePage = (page) => {
        setCurrentPage(page);
    }
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };
    
    const handleNextPage = (totalPages) => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };
    
    const handleChangeItemsPerPage = (num) => {
        setItemsPerPage(num);
        // console.log(itemsPerPage);
    }

    const handleSort = () => {}

    return (
        <>
            {cloneElement(children, { data: data, itemsPerPage: itemsPerPage, currentItems: getCurrentItems, index: startIndex, handleChangeItemsPerPage: handleChangeItemsPerPage, totalPages: totalPages, currentPage: currentPage, handleNextPage: handleNextPage, handlePreviousPage: handlePreviousPage, handleSort })}
        </>
    )

}