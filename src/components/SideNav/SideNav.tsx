import { FC, useState } from "react";
import "./SideNav.scss";
import Logo from "../../assets/images/brand_icon.png";
import { SideNavData } from "./SideNavData";
import BlogIcon from "../../assets/images/blog-icon.svg";
import { FaArrowLeft as ArrowIcon} from "react-icons/fa";

const SideNav:FC = () => {
    const [hideSideNav, setHideSideNav] = useState(true)
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
                        SideNavData.map(item => {
                            return(
                                <div className="item active">
                                    <img src={BlogIcon}/><p>{item.name}</p>
                                    {
                                        item.name==="Mail" && (<span className="stat">+32</span>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SideNav;