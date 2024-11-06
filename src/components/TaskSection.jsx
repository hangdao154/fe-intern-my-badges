import MyBadges from "./MyBadges";
import FriendList from "./FriendList";
import PointHistory from "./PointHistory";

export default function TaskSection(props) {
    const { page } = props;

    const friend = {
        walletAddress: "0xE74...b6e3",
        joinedDate: "2024/01/07 10:00:00",
        level: 50,
        earnedPoints: 100000,
        refereeCount: 100000,
        yourRefereeRewards: 100000
    }

    const transaction = {
        transactionDate: "2024/01/07 10:00:00",
        taskName: "Authorise X(Twitter) Account",
        earnedPoints: 100000000,
        refereeAdress: "...",
        relatedPost: "...",
        status: "Successful"
    }

    const friendL = [], transL = [];
    for (let i = 0; i < 5; i++) { 
        friendL.push(friend);
        transL.push(transaction)
    }

    switch (page) {
        case 1:
            return (<FriendList data={friendL}></FriendList>)
        case 2:
            return (<PointHistory data={transL}></PointHistory>)
        default:
            return (<MyBadges></MyBadges>)
    }
}