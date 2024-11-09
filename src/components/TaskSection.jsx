import { React, useState } from 'react'
import MyBadges from "./MyBadges";
import FriendList from "./FriendList";
import PointHistory from "./PointHistory";
import PageItemsSelector from './PageItemsSelector';
import PageNav from './PageNav';

export default function TaskSection(props) {
    const { page } = props;

    /*============== Test data ==============*/
    const friend = {
        walletAddress: "0xE74...b6e3",
        joinedDate: new Date(),
        level: 50,
        earnedPoints: 100000,
        refereeCount: 100000,
        yourRefereeRewards: 100000
    }
    const transaction = {
        transactionDate: new Date(),
        taskName: "Authorise X(Twitter) Account",
        earnedPoints: 100000000,
        refereeAdress: "...",
        relatedPost: "...",
        status: "Successful"
    }
    const badge = {
        badgeImg: "public/badge/badge1.png",
        flag: "public/badge-flag/saved-icon.png",
        status: "owned"
    }
    const friendL = [], transL = [], badgeL = [];
    for (let i = 0; i < 25; i++) { 
        friendL.push(friend);
        transL.push(transaction)
        badgeL.push(badge);
    }

    /*========================================*/

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

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
        setItemsPerPage(num);
        console.log(itemsPerPage);
    }

    const handleSort = (data, key) => {
        data.sort(a[key] > b[key]);
    }

    switch (page) {
        case 1: {
            const totalPages = Math.ceil(friendL.length / itemsPerPage);
            return (
                <>
                    <FriendList data={friendL} itemsPerPage={itemsPerPage} index={startIndex} getCurrentItems={getCurrentItems}></FriendList>
                    <div className="pagination-container">
                        <PageItemsSelector handleChangeItemsPerPage={handleChangeItemsPerPage}></PageItemsSelector>
                        <PageNav totalPages={totalPages} currentPage={currentPage} handleChangePage={handleChangePage} handleNextPage={() => handleNextPage(totalPages)} handlePreviousPage={handlePreviousPage}></PageNav>
                    </div>
                </>
            )
        }

        case 2: {
            const totalPages = Math.ceil(transL.length / itemsPerPage);
            return (
                <>
                    <PointHistory data={transL} itemsPerPage={itemsPerPage} getCurrentItems={getCurrentItems} index={startIndex}></PointHistory>
                    <div className="pagination-container">
                        <PageItemsSelector handleChangeItemsPerPage={handleChangeItemsPerPage}></PageItemsSelector>
                        <PageNav totalPages={totalPages} currentPage={currentPage} handleChangePage={handleChangePage} handleNextPage={() => handleNextPage(totalPages)} handlePreviousPage={handlePreviousPage}></PageNav>
                    </div>
                </>
            )
        }

        default: {
            const totalPages = Math.ceil(badgeL.length / itemsPerPage);
            return (
                <>
                    <MyBadges data={badgeL} index={startIndex} getCurrentItems={getCurrentItems} itemsPerPage={itemsPerPage} handleChangeItemsPerPage={handleChangeItemsPerPage}></MyBadges>
                    <div className="pagination-container badge">
                        <PageNav totalPages={totalPages} currentPage={currentPage} handleChangePage={handleChangePage} handleNextPage={() => handleNextPage(totalPages)} handlePreviousPage={handlePreviousPage}></PageNav>
                    </div>
                 </>
            )
        }
    }
}