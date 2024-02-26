import "./rightbarprofile.css"
// import {Users} from "../../dummyData";
// import Online from "../online/Online";

// export default function Rightbarprofile({profile}) {



// const HomeRightbar = () => {
//   return(
//     <>
//           <div className="birthdayContainer">
//             <img className="birthdayImg" src="./assets/team/1.png" alt="hennessy" />   
//             <span className="birthdayText">
//             <b>Pola Foster</b> and <b>3 other friends</b> had a cool hang out today!
//             </span>
//           </div>
//             <img src="./assets/team/hennessyad.jpg" alt="ad logo" className="rightbarAd" />
//             <h4 className="rightbarTitle">Online Friends</h4>
//            <ul className="rightbarFriendList">
//             {Users.map((u) => (
//               <Online key={u.id} user={u}/>
//             ))}
//            </ul>
//     </>
//   );
// }
export default function Rightbarprofile() {

// const ProfileRightbar = () =>{
  return (
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City</span>
        <span className="rightbarInfoKeyValue">Port Harcourt</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From</span>
        <span className="rightbarInfoKeyValue">Aba</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship</span>
        <span className="rightbarInfoKeyValue">Single but not searching!</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="./assets/team/4.jpg" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Osuofia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/team-.jpg" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Mr Ibu</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/team-1.jpg" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Ada Abia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/team-3.jpg" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Nick Bull</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/3.png" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Ozi Oma</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/3.jpg" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Guy Richie</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/2.jpg" alt="picture" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Akachi Diya</span>
    </div>
    </div>

    </>
  );
}

//   return (
//     <div className="rightbar">
//         <div className="rightbarWrapper">
//           <ProfileRightbar/>
//         </div>
//     </div>
//   );
// }
