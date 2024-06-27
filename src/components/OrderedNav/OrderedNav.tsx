import { FC } from "react";
import "./OrderedNav.scss";

const OrderedNav:FC = () => {
    return(
        <div className="orderednav-container">
            <p>Dashboard</p>
            <span className="dot"></span>
            <p>Blog</p>
            <span className="dot"></span>
            <p>List</p>
        </div>
    )
}

export default OrderedNav;