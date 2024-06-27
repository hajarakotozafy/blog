import { FC } from "react";
import UK from "../../assets/images/UK.png";
import Notif from "../../assets/images/notif-icon.png";
import People from "../../assets/images/people-icon.png";
import Settings from "../../assets/images/settings-icon.png";
import Avatar from "../../assets/images/avatar.png";
import SearchIcon from "../../assets/images/search-icon.png";
import "./DashboardNav.scss";

const DashboardNav:FC = () => {
    return (
        <div className="dashboardnav-container">
            <div className="search-bar">
                <img src={SearchIcon}/>
                {/* <input type="text" placeholder="Search..." className={openSearch?'search':''}/> */}
                <span>{'⌘K'}</span>
            </div>
            <div className="nav-actions">
                <div><img src={UK}/></div>
                <div className="notif"><img src={Notif}/><p className="content">4</p></div>
                <div><img src={People}/></div>
                <div><img src={Settings}/></div>
            </div>
            <div className="avatar">
                <img src={Avatar}/>
            </div>
        </div>
    )
}

export default DashboardNav;