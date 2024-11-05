import React from 'react'
import BadgeItem from './BadgeItem'

export default function MyBadges() {
    return (
        <>
            <div className="filter-section">
                <select className="selector">
                    <option>Tier</option>
                </select>
                <select className="selector">
                    <option>Status</option>
                </select>
                <img className="md-icon" src="public/refresh-icon.png"/>
            </div>

            <div className="badges-container">
                <BadgeItem badgeImg="public/badge/badge1.png" flag="public/badge-flag/saved-icon.png" status="owned"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge2.png" flag="public/badge-flag/plus-icon.png" status="owned"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge1.png" flag="public/badge-flag/saved-icon.png" status="claimable"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge2.png" flag="public/badge-flag/plus-icon.png" status="yet-claimable"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge1.png" flag="public/badge-flag/saved-icon.png" status="owned"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge2.png" flag="public/badge-flag/plus-icon.png" status="owned"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge1.png" flag="public/badge-flag/saved-icon.png" status="claimable"></BadgeItem>
                <BadgeItem badgeImg="public/badge/badge2.png" flag="public/badge-flag/plus-icon.png" status="yet-claimable"></BadgeItem>
            </div>

            <div className="pagination"></div>

        </>
    )
}