import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";

import UK from "../../assets/images/UK.png";
import Notif from "../../assets/images/notif-icon.png";
import People from "../../assets/images/people-icon.png";
import Settings from "../../assets/images/settings-icon.png";
import Logo from "../../assets/images/brand_icon.png";
import Avatar from "../../assets/images/avatar.png";
import SearchIcon from "../../assets/images/search-icon.png";

import "./Navbar.scss";

import Button from "../Button/Button";

import { UserNavbarData } from "./UserNavbarData";

import { RoleContext } from "../../contexts/RoleContext";

const Navbar:FC = () => {
    const { role } = useContext(RoleContext);

    return (
        <>{ role.isAdmin ? 
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
            :
            <div className="user-nav-container">
                <div className="user-nav-inner">
                    <div className="logo">
                        <img src={Logo}/>
                    </div>
                    <div className="items">
                        {UserNavbarData.map((elem, index) => {
                            return (
                                <NavLink to={elem.url}>{elem.name}</NavLink>
                            )
                        })}
                        
                        <div className="settings-btn"><img src={Settings}/></div>
                        <Button color="white">Sign In</Button>
                        <Button>Purchase</Button>
                    </div>
                </div>
            </div>
        }</>)
}

export default Navbar;