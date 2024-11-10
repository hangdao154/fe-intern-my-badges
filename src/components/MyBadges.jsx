import { React, useState } from 'react'
import BadgeItem from './BadgeItem'
import PageNav from './PageNav'

export default function MyBadges(props) {
    const { data, handleSort } = props;
    
    const [currentPage, setCurrentPage] = useState(1);
    
    const ITEMS_PER_PAGE = 12;
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    
    function getCurrentItems(data) {
        const endIndex = startIndex + ITEMS_PER_PAGE;
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
    
    let index = startIndex;

    return (
        <>
            <div className="filter-section">
                <select className="selector">
                    <option>Tier</option>
                </select>
                <select className="selector">
                    <option>Status</option>
                </select>
                <img className="md-icon" src="public/refresh-icon.png"/>
            </div>

            <div className="badges-container">
                {getCurrentItems(data).map(item => (
                    <BadgeItem key={index++} badgeImg={item.badgeImg} flag={item.flag} status={item.status}></BadgeItem>
                ))}
            </div>

            <PageNav totalPages={totalPages} currentPage={currentPage} handleChangePage={handleChangePage} handleNextPage={() => handleNextPage(totalPages)} handlePreviousPage={handlePreviousPage}></PageNav>
        </>
    )
}