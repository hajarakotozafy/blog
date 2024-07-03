import { CardPropsType } from "./Card.types";
import "./Card.scss";

import { FaCommentDots } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({
    status,
    date,
    title,
    text,
    comments,
    views,
    shares,
    cover,
    avatar,
    id
}: CardPropsType) => {


    return(
        <div className="card-container">
            <div className="info">
                <div className="card-header">
                    <div className={`status ${status}`}>{status}</div>
                    <p>{date}</p>
                </div>
                <div className="card-content">
                    <h3>
                        <Link to={`/blog/details/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    <p>{text}</p>
                </div>
                <div className="card-footer">
                    <div className="more-btn"><MdMoreHoriz/></div>
                    <div className="stats">
                        <p><FaCommentDots/>{`${comments}k`}</p>
                        <p><FaEye/>{`${views}k`}</p>
                        <p><FaShareAlt/>{`${shares}k`}</p>
                    </div>
                </div>
            </div>
            <div className="images">
                <div className="cover"><img src={cover}/></div>
                <div className="avatar"><img src={avatar}/></div>
            </div>
        </div>
    )
}

export default Card;