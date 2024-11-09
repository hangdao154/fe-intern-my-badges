import Points from "./Points";
import LevelCell from "./LevelCell";
import TaskNameCell from "./TaskNameCell";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";

export default function Table(props) {
    const {data, index, handleKeyToSort} = props;

    let currentIndex = index;

    
    const columns = Object.keys(data[0]);

    const handlePrintCell = (key, val) => {
        switch (key) {
            case "walletAddress":
            case "refereeCount":
            case "refereeAdress":
                return val;
            case "joinedDate":
            case "transactionDate":
                return (<DateCell 
                    date={[val.getFullYear(), val.getMonth()+1, val.getDate()].join("/")} 
                    time={[val.getHours(), val.getMinutes(), val.getSeconds()].join(":")}></DateCell>)
            case "earnedPoints":
            case "yourRefereeRewards":
                return (<Points point={val}></Points>)
            case "level":
                return (<LevelCell level={val}></LevelCell>)
            case "taskName":
                return (<TaskNameCell data={val}></TaskNameCell>)
            case "relatedPost":
                return (<img className="sm-icon" src="public/extend-icon.png"/>)
            case "status":
                return (<StatusCell status={val}></StatusCell>)
        }
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr key={currentIndex++}>
                        <th>No</th>
                        
                        {columns.map(col => (
                            <th key={col} onClick={() => handleKeyToSort(col)}>{col}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map(obj => (
                        <tr key={currentIndex++}>
                            <td>{currentIndex}</td>
                            {Object.keys(obj).map(key => (
                                <td key={String(currentIndex) + key}>{handlePrintCell(key, obj[key])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}