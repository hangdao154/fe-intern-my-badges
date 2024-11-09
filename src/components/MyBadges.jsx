import { React, useState } from 'react'
import BadgeItem from './BadgeItem'
import Pagination from './PageNav'

export default function MyBadges(props) {
    const {data, getCurrentItems, itemsPerPage, index, handleChangeItemsPerPage} = props;

    handleChangeItemsPerPage(12);
    const currentItems = getCurrentItems(data, itemsPerPage);
    
    let startIndex = index;

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
                { currentItems.map(item => (
                    <BadgeItem key={startIndex++} badgeImg={item.badgeImg} flag={item.flag} status={item.status}></BadgeItem>
                ))}
            </div>
        </>
    )
}