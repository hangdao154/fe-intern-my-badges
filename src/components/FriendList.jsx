import Points from "./Points"
import Table from "./Table";

export default function FriendList(props) {
    const { data } = props;

    const columns = Object.keys(data[0]);
    let index = 0;

    return (
        <>
            <div className="settings">
                <div className="filter-section">
                    <div className="search-box">
                        <img/>
                        <input placeholder="Search by wallet address"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Joined Date" onFocus={(e) => {
                            e.target.type="date"
                        }}/>
                    </div>
                    <p>to</p>
                    <div>
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
            
            <Table data={data}></Table>
        </>
    )
}