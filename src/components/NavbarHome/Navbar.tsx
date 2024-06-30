import { FC } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/brand_icon.png";

const Navbar:FC = () => {
    return(
        <div className="navbar-container">
            <div>
                <span>ARTICLES</span>
                <span>INTERVIEWS</span>
            </div>
            <img src={Logo}/>
        </div>
    )
}

export default Navbar;