import { FC, useState } from "react";
import "./SideBar.scss";
import Logo from "../../assets/images/brand_icon.png";
import { SideBarData } from "./SideBarData";
import BlogIcon from "../../assets/images/blog-icon.svg";
import { FaArrowLeft as ArrowIcon} from "react-icons/fa";
import SideBarItem from "../SideBarItem/SideBarItem";

const SideBar:FC = () => {
    const [hideSideNav, setHideSideNav] = useState(false)
    return (
        <div className={`sidenav-container ${hideSideNav?'hide':''}`}>
            <div className="sidenav-header">
                <img src={Logo}/>
                <button onClick={()=>setHideSideNav(!hideSideNav)} className={`hide-btn-action ${hideSideNav?'reverse': ''}`}><ArrowIcon/></button>
            </div>
            <div className="menu">
                <h3>OVERVIEW</h3>
                <div className={`menu-items ${hideSideNav?'hide':''}`}>
                    {
                        SideBarData.map((item, index) => {
                            return(<SideBarItem key={index} item={item}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar;
