import { useState } from "react";

import Points from "./Points";
import Table from "./Table";
import PageNav from "./PageNav";
import PageItemsSelector from "./PageItemsSelector";

export default function FriendList(props) {
    const { data, handleSort } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const totalPages = Math.ceil(data.length / itemsPerPage);
    let startIndex = (currentPage - 1) * itemsPerPage;
    
    function getCurrentItems(data, itemsPerPage) {
        startIndex = (currentPage - 1) * itemsPerPage;
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

    const handleKeyToSort = (key) => {
        handleSort(data, key);
        console.log(data);
    }

    return (
        <>
            <div className="settings">
                <div className="filter-section">
                    <div className="search-box">
                        <img className="sm-icon inline-icon" src="public/search.png"/>
                        <input placeholder="Search by wallet address"/>
                    </div>
                    <div className="date-box">
                        <input type="text" placeholder="Joined Date" onFocus={(e) => {
                            e.target.type="date"
                        }}/>
                    </div>
                    <p>to</p>
                    <div className="date-box">
                        <input type="text" placeholder="Joined Date" onFocus={(e) => {
                            e.target.type="date"
                        }}/>
                    </div>
                    <img className="md-icon" src="public/refresh-icon.png"/>
                </div>

                <img className="lg-icon" src="public/setting-blue.png"/>
            </div>

            <div className="summary">
                <div className="left">
                    <p style={{color: "#4E5464"}}>Your Referral Rewards:</p>
                    <Points point="100,000,000 SP"></Points>
                </div>
                <div className="right">
                        <p style={{color: "#4E5464"}}>Total Friends: 24</p>
                </div>
            </div>
            
            <Table data={getCurrentItems(data, itemsPerPage)} index={startIndex} handleKeyToSort={handleKeyToSort}></Table>

            <PageItemsSelector handleChangeItemsPerPage={handleChangeItemsPerPage}></PageItemsSelector>

            <PageNav totalPages={totalPages} currentPage={currentPage} handleChangePage={handleChangePage} handleNextPage={() => handleNextPage(totalPages)} handlePreviousPage={handlePreviousPage}></PageNav>
        </>
    )
}