import { useState } from "react";

import Points from "./Points";
import Table from "./Table";
import PageNav from "./PageNav";
import PageItemsSelector from "./PageItemsSelector";

export default function PointHistory(props) {
    const { data, handleSort } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    
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
        setCurrentPage(1);
        setItemsPerPage(num);
    }

    const handleKeyToSort = (key) => {
        handleSort(data, key);
        console.log(data);
    }

    return (
        <>
            <div className="filter-section">
                <div className="search-box">
                    <img className="sm-icon inline-icon" src="public/search.png"/>
                    <input placeholder="Search by wallet address"/>
                </div>
                <div className="date-box">
                    <input type="text" placeholder="Transaction Date" onFocus={(e) => {
                        e.target.type="date"
                    }}/>
                </div>
                <p>to</p>
                <div className="date-box">
                    <input type="text" placeholder="Transaction Date" onFocus={(e) => {
                        e.target.type="date"
                    }}/>
                </div>
                <select>
                    <option>All Tasks</option>
                </select>
                <select>
                    <option>Status</option>
                </select>
                <img className="md-icon" src="public/refresh-icon.png"/>
            </div>

            <div className="summary">
                <div className="left">
                    <p style={{color: "#4E5464"}}>Total Points:</p>
                    <Points point="100,000,000 SP"></Points>
                    <img className="sm-icon" src="public/question-icon.png"/>
                </div>
                <div className="right">
                        <p style={{color: "#4E5464"}}>Total Transactions: 24</p>
                </div>
            </div>

            <Table data={getCurrentItems(data, itemsPerPage)} index={startIndex} handleKeyToSort={handleKeyToSort}></Table>

            <div className="pagination-container">
                <PageItemsSelector handleChangeItemsPerPage={handleChangeItemsPerPage}></PageItemsSelector>
                <PageNav totalPages={totalPages} currentPage={currentPage} handleChangePage={handleChangePage} handleNextPage={() => handleNextPage(totalPages)} handlePreviousPage={handlePreviousPage}></PageNav>
            </div>
        </>
    )
}