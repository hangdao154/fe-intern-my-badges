import { useState } from "react";

export default function BadgeDetails(props) {
    const { popupState, data, handleChangePopupState } = props;

    
    if (popupState === "true") {
        const [currentPage, setcurrentPage] = useState(1);
        const [visibleContent, setVisibleContent] = useState(data.description);

        return (
            <div className="badge-details"k>
                <img onClick={() => handleChangePopupState("false")}/>
    
                <img src={data.badgeImg}/>
                <h1>{data.name}</h1>
                <div className="type-tier-container">
                    <p className="badge-type">{data.type}</p>
                    <p className="badge-tier">{data.tier}</p>
                </div>
                
                <div className="currentPage-slider">
                    <button className={currentPage === 1 ? "active-btn" : ""} onClick={() => {
                        setcurrentPage(1);
                        setVisibleContent(data.description);
                    }}>Description</button>
                    <button className={ currentPage === 2 ? "active-btn" : ""} onClick={() => {
                        setcurrentPage(2);
                        setVisibleContent(data.howToEarn);
                    }}>How To Earn</button>
                </div>
    
                <p>{visibleContent}</p>
    
            </div>
        )
    } else {
        return(<></>)
    }
}