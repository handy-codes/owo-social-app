import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import "./navbar.css"
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/login/Login";

import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Factbook</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="Search for friends, posts or videos" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
             <nav>
                 <Link to="/" className="topbarLink">Bethel</Link>
                 <Link to="/profile" className="topbarLink">Profile</Link> 
                 <Link to="/login" className="topbarLink">Login</Link>
             </nav>  
             <Routes>
                <Route index element={<Home/>} />
                <Route path="profile" element={<Profile/>} />
                <Route path="login" element={<Login/>} />
             </Routes> 
            </div>
            
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <img src="./assets/team/1.jpg" alt="friend" className="topbarImg" />
            </div>
        </div>
    </div>
  )
}
