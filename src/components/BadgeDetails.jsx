import { useState } from "react";

export default function BadgeDetails(props) {
    const { popupState, data, handleChangePopupState } = props;


    if (popupState === "true") {
        const [currentPage, setcurrentPage] = useState(1);
        const [visibleContent, setVisibleContent] = useState(data.description);

        return (
            <div className="container badge-details" k>
                <img src="public/x-button.png" className="escape-btn sm-icon" onClick={() => handleChangePopupState("false")} />

                <img src={data.badgeImg} />
                <h1>{data.name}</h1>
                <div className="type-tier-container">
                    <p className="badge-type">{data.type}</p>
                    <p className="badge-tier">Tier {data.tier}</p>
                </div>

                <ul className="currentPage-slider">
                    <li className={currentPage === 1 ? "active-button" : ""} onClick={() => {
                        setcurrentPage(1);
                        setVisibleContent(data.description);
                    }}>Description</li>
                    <li className={currentPage === 2 ? "active-button" : ""} onClick={() => {
                        setcurrentPage(2);
                        setVisibleContent(data.howToEarn);
                    }}>How To Earn</li>
                </ul>

                <p>{visibleContent}</p>

            </div>
        )
    } else {
        return (<></>)
    }
}