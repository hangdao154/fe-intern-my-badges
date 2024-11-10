import { React, useState } from 'react'
import MyBadges from "./MyBadges";
import FriendList from "./FriendList";
import PointHistory from "./PointHistory";
import PageItemsSelector from './PageItemsSelector';
import PageNav from './PageNav';
import Pagination from './Pagination';

export default function TaskSection(props) {
    const { page } = props;

    /*============== Test data ==============*/
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
    const friendL = [{
        walletAddress: "B",
        joinedDate: new Date(),
        level: 90,
        earnedPoints: 20000000,
        refereeCount: 15000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "A",
        joinedDate: new Date(),
        level: 60,
        earnedPoints: 100000,
        refereeCount: 200000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "D",
        joinedDate: new Date(),
        level: 70,
        earnedPoints: 100000,
        refereeCount: 100000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "B",
        joinedDate: new Date(),
        level: 90,
        earnedPoints: 20000000,
        refereeCount: 15000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "A",
        joinedDate: new Date(),
        level: 60,
        earnedPoints: 100000,
        refereeCount: 200000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "D",
        joinedDate: new Date(),
        level: 70,
        earnedPoints: 100000,
        refereeCount: 100000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "B",
        joinedDate: new Date(),
        level: 90,
        earnedPoints: 20000000,
        refereeCount: 15000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "A",
        joinedDate: new Date(),
        level: 60,
        earnedPoints: 100000,
        refereeCount: 200000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "D",
        joinedDate: new Date(),
        level: 70,
        earnedPoints: 100000,
        refereeCount: 100000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "B",
        joinedDate: new Date(),
        level: 90,
        earnedPoints: 20000000,
        refereeCount: 15000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "A",
        joinedDate: new Date(),
        level: 60,
        earnedPoints: 100000,
        refereeCount: 200000,
        yourRefereeRewards: 100000
    }, {
        walletAddress: "D",
        joinedDate: new Date(),
        level: 70,
        earnedPoints: 100000,
        refereeCount: 100000,
        yourRefereeRewards: 100000
    }];
    
    const transL = [], badgeL = [];
    for (let i = 0; i < 25; i++) { 
        transL.push(transaction)
        badgeL.push(badge);
    }
    /*========================================*/

    const handleSort = () => {}


    switch (page) {
        case 1: {
            return (
                <>
                    <FriendList data={friendL} handleSort={handleSort}></FriendList>
                </>
            )
        }

        case 2: {
            return (
                <>
                    <PointHistory data={transL}></PointHistory>
                </>
            )
        }

        default: {
            return (
                <>
                    <MyBadges data={badgeL}></MyBadges>
                </>
            )
        }
    }
}