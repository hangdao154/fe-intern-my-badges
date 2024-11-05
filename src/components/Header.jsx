import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="left">
                <img src="public/svg/web-logo.svg"/>

                <nav>
                    <ul>
                        <li>Task Center</li>
                        <li>
                            <select>
                                <option>Stake&Earn</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>NFT</option>
                            </select>
                        </li>
                        <li>Leaderboard</li>
                    </ul>   
                </nav>
            </div>

            <div className="right">
                <div className="choose-language">
                    <select className="selector">
                        <option><img/>Japanese</option>
                    </select>
                </div>
                <img className="md-icon" src="public/bell-icon.png"/>
                <div className="outline-box">
                    <img className="sm-icon" src="public/user-ava.png"/>
                    <p>0xE74...b6e3</p>
                </div>
            </div>
        </header>
    )
}