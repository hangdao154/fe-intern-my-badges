import Points from "./Points"
import Table from "./Table";

export default function FriendList(props) {
    const { data, itemsPerPage, getCurrentItems, index } = props;

    const currentItems = getCurrentItems(data, itemsPerPage);

    const handleKeyToSort = (key) => {
        handleSort(key, data);
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
            
            <Table data={currentItems} index={index} handleKeyToSort={handleKeyToSort}></Table>
        </>
    )
}