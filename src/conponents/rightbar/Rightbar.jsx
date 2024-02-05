import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar1() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                <img src="./assets/team/hennessyad.jpg" alt="hennessyad" className="birthdayImg" />
                <span className="birthdayText">
                    <b>Agwabunma Owo </b> and <b>3 other friend</b> like this
                </span>
            </div>
            <img src="./assets/team/hennessyad.jpg" alt="hennessy" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u=>(
                    <Online key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
