import MyBadges from "./MyBadges";
import FriendList from "./FriendList";
import PointHistory from "./PointHistory";

export default function TaskSection(props) {
    const { page } = props;

    switch (page) {
        case 1:
            return (<PointHistory></PointHistory>)
        case 2:
            return (<FriendList></FriendList>)
        default:
            return (<MyBadges></MyBadges>)
    }
}