import Points from "./Points";
import Table from "./Table";

export default function PointHistory(props) {
    const { data, itemsPerPage, getCurrentItems, index } = props;

    const currentItems = getCurrentItems(data, itemsPerPage);

    return (
        <>
            <div className="filter-section">
                <div className="search-box">
                    <img className="sm-icon inline-icon" src="public/search.png"/>
                    <input placeholder="Search by wallet address"/>
                </div>
                <div className="date-box">
                    <input type="text" placeholder="Transaction Date" onFocus={(e) => {
                        e.target.type="date"
                    }}/>
                </div>
                <p>to</p>
                <div className="date-box">
                    <input type="text" placeholder="Transaction Date" onFocus={(e) => {
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

            <Table data={currentItems} index={index}></Table>
        </>
    )
}