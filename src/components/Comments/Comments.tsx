import "./Comment.scss";
import { FaPen } from "react-icons/fa6";

export const Comment = ({
    avatar,
    name,
    date,
    comment,
    replies
}: any) => {
    return(
        <div className="comment-container">
            <div className="comment-bloc parent-comment">
                <div>
                    <div className="sender">
                        <div className="avatar">
                            <img src={avatar}/>
                        </div>
                        <div className="infos">
                            <p className="name">{name}</p>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                    <div className="reply-btn">
                        <FaPen/>
                        <span>Reply</span>
                    </div>
                </div>
                <div className="comment">
                    <p>
                        {comment}
                    </p>
                </div>
            </div>
            {
                replies.map((reply:any, index:any) => {
                    return(
                        <div className="comment-bloc reply" key={index}>
                            <div className="sender">
                                <div className="avatar">
                                    <img src={reply.avatar}/>
                                </div>
                                <div className="infos">
                                    <p className="name">{reply.name}</p>
                                    <p className="date">{reply.date}</p>
                                </div>
                            </div>
                            <div className="comment">
                                <p>
                                    {reply.comment}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default Comment;