import React from 'react'
import BadgeStatus from './BadgeStatus'

export default function BadgeItem(props) {

  const { badgeImg, flag, status } = props;

  return (
    <div className="box badge-item">
        <img className="badge-flag" src={flag}/>
        <img className="badge-img" src={badgeImg}/>
        <p>Badge Celebrating 30 years long long long name</p>

        <hr/>

        <BadgeStatus status={status}></BadgeStatus>
    </div>
  )
}