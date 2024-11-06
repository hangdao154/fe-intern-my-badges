import Points from "./Points";
import LevelCell from "./LevelCell";
import TaskNameCell from "./TaskNameCell";
import StatusCell from "./StatusCell";

export default function Table(props) {
    const {data} = props;
    const columns = Object.keys(data[0]);
    let index = 0;

    const handlePrintCell = (key, val) => {
        switch (key) {
            case "walletAddress":
            case "joinedDate":
            case "refereeCount":
            case "transactionDate":
            case "refereeAdress":
                return val;
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
        <table>
            <thead>
                <tr key={index++}>
                    <th>No</th>
                    {columns.map(col => (
                        <th>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr key={index++}>
                        <td>{index}</td>
                        {Object.entries(row).map(property => (
                            <td>{handlePrintCell(property[0], property[1])}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}