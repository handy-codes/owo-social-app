import "./rightbarprofile.css"

export default function Rightbarprofile() {
  
const ProfileRightbar = () =>{
  return (
    <>
    <div className="bigcover">
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
        <img src="./assets/team/4.jpg" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Osuofia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/team-.jpg" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Mr Ibu</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/team-1.jpg" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Ada Abia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/team-3.jpg" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Nick Bull</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/3.png" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Ozi Oma</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/3.jpg" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Guy Richie</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/team/2.jpg" alt="someone" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Akachi Diya</span>
    </div>
  </div>
  </div>
  </>
  );
 }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <ProfileRightbar/>
        </div>
    </div>
  );
}

