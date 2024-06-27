import { FC } from "react";
import "./BlogList.scss";
import Button from "../../components/Button/Button";
import { FaPlus } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";

import OrderedNav from "../../components/OrderedNav/OrderedNav";
import SearchIcon from "../../assets/images/search-icon.png";
import { List } from "./List";
import Card from "../../components/Card/Card";

const BlogList:FC = () => {
    return(
        <div className="blog-list-container">
            <div className="blog-list-inner">
                <div className="blog-list-header">
                    <div className="blog-list-title">
                        <h3>List</h3>
                        <div>
                            <Button><FaPlus/><span>New Post</span></Button>
                        </div>
                    </div>
                    <OrderedNav/>
                </div>
                <div className="blog-list-filter">
                    <div className="search-bar">
                        <img src={SearchIcon}/>
                        <input placeholder="Search..."/>
                    </div>
                    <div className="filter-button">
                        <p>Sort By</p>
                        <p>Latest</p>
                        <IoIosArrowDown/>
                    </div>
                </div>
                <div className="status-filter">
                    <div className="all">
                        <span>All</span>
                        <span>19</span>
                    </div>
                    <div className="published">
                        <span>Published</span>
                        <span>12</span>
                    </div>
                    <div className="draft">
                        <span>Draft</span>
                        <span>7</span>
                    </div>
                </div>
                <div className="blog-list-card-container">
                    {List.map(elem => <Card
                        key={elem.id}
                        status={elem.status}
                        date={elem.date}
                        title={elem.title}
                        text={elem.text}
                        comments={elem.comments}
                        views={elem.views}
                        shares={elem.shares}
                        cover={elem.cover}
                        avatar={elem.avatar}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default BlogList;