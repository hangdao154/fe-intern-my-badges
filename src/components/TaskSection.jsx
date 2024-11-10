import { React, useState } from 'react'
import MyBadges from "./MyBadges";
import FriendList from "./FriendList";
import PointHistory from "./PointHistory";

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
    for (let i = 0; i < 72; i++) { 
        transL.push(transaction)
        badgeL.push(badge);
    }
    /*========================================*/

    const handleSort = (data, sortInfo) => {
        return (sortInfo.direction === "asc" 
            ? data.sort((a, b) => a[sortInfo.keyToSort] - b[sortInfo.keyToSort]) 
            : data.sort((a, b) => b[sortInfo.keyToSort] - a[sortInfo.keyToSort]))
    }


    switch (page) {
        case 1: {
            return (
                    <FriendList data={friendL} handleSort={handleSort}></FriendList>
            )
        }

        case 2: {
            return (
                    <PointHistory data={transL} handleSort={handleSort}></PointHistory>
            )
        }

        default: {
            return (
                    <MyBadges data={badgeL} handleSort={handleSort}></MyBadges>
            )
        }
    }
}