import { FC, useState } from "react";
import "./SideNavItem.scss";
import { SideNavItemProps } from "./SideNavItem.types";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { useLocation, NavLink } from "react-router-dom";

const SideNavItem = ({item}:SideNavItemProps) => {
    const [displaySubmenu, setDisplaySubmenu] = useState(false);
    const location = useLocation();
    return(
        <>
            

        		<div 
                    onClick={()=>setDisplaySubmenu(!displaySubmenu)} 
                    className={`${item.name!=="Blog" && !item.collapsedItem ? "item none-on-collapse" : "item"} ${item.name==='Job'||item.name===''? 'displayOneCollapse': ''} ${location.pathname.split('/')[1] === item.url.split('/')[1] ? 'active': ''}`}
                >
                    <NavLink 
                        to={item.url}
                    >
                        <div>
                            {item.icon}
                            <p>{item.name}</p>
                        </div>
                        {
                            Object.keys(item).includes('submenu')?
                                displaySubmenu ?
                                    (<IoIosArrowUp/>)
                                    : 
                                    (<IoIosArrowDown/>)
                                    :''
                        }
                    </NavLink>
                </div>
            {
                Object.keys(item).includes('submenu') &&
                    <div className={displaySubmenu?'submenu':''}>

                        {
                            displaySubmenu && item.submenu.map((elem) =>(
                                
                                    <div className={`${location.pathname === elem.url ? 'sub-active': ''}`}>
                                        <NavLink to={elem.url}>
                                            <div className="motif"></div>
                                            <p>{elem.name}</p>
                                        </NavLink>
                                    </div>
                            ))
                        }
                    </div>
            }
        </>
	)
}

export default SideNavItem
// <div className={item.name!=="Blog" && !item.collapsedItem? "item none-on-collapse active":"item active"}>
//     {item.icon}<p>{item.name}</p>
//     {
//         item.name==="Mail" && (<span className="stat">+32</span>)
//     }
// </div>