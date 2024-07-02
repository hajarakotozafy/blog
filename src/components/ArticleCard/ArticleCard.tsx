import { ArticleCardPropsType } from "./ArticleCard.types";
import "./ArticleCard.scss";

import { FaCommentDots } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const ArticleCard = ({
    isFullCover,
    isLargeImage,
    date,
    title,
    comments,
    views,
    shares,
    cover,
    avatar
}: ArticleCardPropsType) => {
    const bgStyle = {
        background: `url(${cover}) center center/cover no-repeat`
    }
    return(
        <div className={`article-card-container ${isFullCover?'isFullCover':''} ${isLargeImage?'isLargeImage':''}`} style={isFullCover?bgStyle:{}}>
            <div className="cover"><img src={cover}/></div>
            <div className="avatar"><img src={avatar}/></div>
            <div className="info">
                <div className="card-header">
                    <p>{date}</p>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <p><FaCommentDots/>{`${comments}k`}</p>
                        <p><FaEye/>{`${views}k`}</p>
                        <p><FaShareAlt/>{`${shares}k`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;