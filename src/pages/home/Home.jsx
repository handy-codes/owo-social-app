import "./home.css";

import Sidebar from "../../conponents/sidebar/Sidebar";
import Feeds from "../../conponents/feed/Feeds";
import Rightbar from "../../conponents/rightbar/Rightbar";
import Topbar from "../../conponents/topbar/Topbar";



export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
       </div>
    </>
  );
}
