import "./profile.css"
import Sidebar from "../../conponents/sidebar/Sidebar";
import Feeds from "../../conponents/feed/Feeds";
import Rightbarprofile from "../../conponents/rightbarprofile/Rightbarprofile";
import Topbar from "../../conponents/topbar/Topbar";


export default function Profile() {
    return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                      <img className="profileCoverImg" src="./assets/team/avatar.jpg" alt="pix" />
                      <img className="profileUserImg" src="./assets/team/girl.png" alt="pix" />
                    </div>
                    <div className="profileInfo">
                      <h4 className="profileInfoName">Ada Abia</h4>
                      <span className="profileInfoDesc">Hello my friends! Welcome to {new Date().getFullYear()}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                  <Feeds/>
                  <Rightbarprofile/>
                </div>                
            </div>
      </div>
    </>
  );
}


