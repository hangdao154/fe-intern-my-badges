import Points from "./Points";
import Table from "./Table";

export default function PointHistory(props) {
    const { data } = props;

    return (
        <>
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
                <select>
                    <option>All Tasks</option>
                </select>
                <select>
                    <option>Status</option>
                </select>
                <img className="md-icon" src="public/refresh-icon.png"/>
            </div>

            <div className="summary">
                <div className="left">
                    <p style={{color: "#4E5464"}}>Total Points:</p>
                    <Points point="100,000,000 SP"></Points>
                    <img className="sm-icon" src="public/question-icon.png"/>
                </div>
                <div className="right">
                        <p style={{color: "#4E5464"}}>Total Transactions: 24</p>
                </div>
            </div>

            <Table data={data}></Table>
        </>
    )
}