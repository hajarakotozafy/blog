import { FC, useContext } from "react";
import "./BlogArticleDetails.scss";
import { FaShareAlt } from "react-icons/fa";
import Avatar from "../../assets/images/blog-list-data/avatar-3.png";
import Pre from "../../assets/images/Pre.png";
import illustration1 from "../../assets/images/illustration-1.png";
import illustration2 from "../../assets/images/illustration-2.png";
import { FaHeart } from "react-icons/fa";

import Avatar1 from "../../assets/images/blog-list-data/avatar-1.png"
import Avatar2 from "../../assets/images/blog-list-data/avatar-2.png"
import Avatar3 from "../../assets/images/blog-list-data/avatar-3.png"
import Button from "../../components/Button/Button";

import { BiSolidImageAdd } from "react-icons/bi";
import { TfiClip } from "react-icons/tfi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Comment from "../../components/Comments/Comments";
import { Comments } from "./Comments";
import { RecentPosts } from "./recent-posts";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

import { RoleContext } from "../../contexts/RoleContext";

const BlogArticleDetails:FC = () => {
    const { role } = useContext(RoleContext);
    return(
        <div className="blog-article-details-container">
            <div className="header">
                <div className="header-overlay">
                    <div className="header-inner">
                        <div className="title">
                            <h2>Climate Change and Its Effects on<br/>Global Food Security</h2>
                        </div>
                        <div className="blog-owner">
                            {!role.isAdmin ? 
                                <div className="profile">
                                    <div className="avatar">
                                        <img src={Avatar}/>
                                    </div>
                                    <div className="head-info">
                                        <h4>Deja Brady</h4>
                                        <span>15 Jun 2024</span>
                                    </div>
                                </div>
                                :<div></div>
                            }
                            <div className="share-btn">
                                <FaShareAlt/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="orderednav-container">
                <div className="orderednav-inner">
                    <p>Dashboard</p>
                    <span className="dot"></span>
                    <p>Blog</p>
                    <span className="dot"></span>
                    <p>Climate Change and Its Effects on Global Food Security</p>    
                </div>    
            </div>
            <div className="blog-content-container">
                <div className="blog-content-inner">
                    <p className="article-heading6 paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <h1 className="article-heading1 h1">Heading H1</h1>
                    <h2 className="article-heading2 h2">Heading H2</h2>
                    <h3 className="article-heading3 h3">Heading H3</h3>
                    <h4 className="article-heading4 h4">Heading H4</h4>
                    <h5 className="article-heading5 h5">Heading H5</h5>
                    <h6 className="article-heading6 h6">Heading H6</h6>
                    <div className="separator"></div>
                    <h4 className="article-heading4 par-style">Paragraph</h4>
                    <div className="paragraph-container">
                        <p className="article-paragraph">What is MTAweb Directory?</p>
                        <p className="article-paragraph">
                            So you have heard about this site or you have been to it, but you cannot figure out what it is or
                            what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links
                            if they wish to do so. The link directory on MTA displays all of the links it currently has, and does
                            so in alphabetical order, which makes it much easier for someone to find what they are looking
                            for if it is something specific and they do not want to go through all the other sites and links as
                            well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.
                        </p>
                        <p className="article-paragraph">
                            With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s
                            successful directory list. When you would like to increase your bid to one of the top positions, you
                            have to know that this would be a wise decision to make as it will not only get your link to be at a
                            higher point in the directory but it will also give you a chance to have your site advertised with the
                            rest of the top ten on the home page of the website. This means that when visitors come to <span className="article-link">MTAweb.com</span>
                            , your site will be one of the first things they see. In other words, you stand a great
                            chance at getting a comeback to your site sooner than you thought.
                        </p>
                        <p className="article-strong-text">This is strong text.</p>
                        <p className="article-italic-text">This is italic text</p>
                        <p className="article-underlined-text">This is underline text</p> 
                    </div>
                    <h4 className="article-heading4 ul-head">Unordered list</h4>
                    <ul>
                        <li>Implements <span className="article-link">This is an external link</span></li>
                        <li>Implements <span className="article-link">This is an inside link</span></li>
                        <li>Renders actual, "native" React DOM elements</li>
                        <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>
                        <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>
                    </ul>
                    <h4 className="article-heading4 ol-head">Ordered list</h4>
                    <ol>
                        <li>Analysis</li>
                        <li>Design</li>
                        <li>Implementation</li>
                    </ol>
                    <h4 className="article-heading4 quote-h">Blockquote</h4>
                    <div className="article-blockquote quote-p">
                        <span>
                        Life is short, Smile while you still have teeth! 
                        </span>
                    </div>
                    <div className="block-code">
                        <h4 className="article-heading4">Block code</h4>
                        <img src={Pre}/>
                        <p className="article-paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <h5 className="article-heading5">How do we use it?</h5>
                        <p className="article-paragraph">
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                            purpose (injected humour and the like).
                        </p>
                        <img src={illustration1}/>
                        <p className="article-paragraph">
                            It is important that you buy links because the links are what get you the results that you want.
                            The popularity of the links that are listed in the MTA directory is in fact one of the most important
                            factors in the performance of the search engine. Links are important and this is why you have to
                            purchase a link in order to bid on something and the best part is that a link will only cost you $1,
                            which is nothing compared to what you would pay if you decided to do it through any other
                            company or website.
                        </p>
                        <img src={illustration2}/>
                        
                        <div className="separator"></div>
                        
                        <div className="tags">
                            <div className="tag">
                                Technology
                            </div>
                            <div className="tag">
                                Health and Wellness
                            </div>
                            <div className="tag">
                                Travel
                            </div>
                            <div className="tag">
                                Finance
                            </div>
                            <div className="tag">
                                Education
                            </div>
                        </div>
                        <div className="likes">
                            <div className="stats">
                                <FaHeart/>
                                <span>2.03k</span>
                            </div>
                            <div className="avatars">
                                <div className="avatar1">
                                    <img src={Avatar1}/>
                                </div>
                                <div className="avatar2">
                                    <img src={Avatar2}/>
                                </div>
                                <div className="avatar3">
                                    <img src={Avatar3}/>
                                </div>
                                <div className="avatar4">
                                    +17
                                </div>
                            </div>
                        </div>

                        <div className="separator"></div>

                        <div className="comments-title">
                            <h4 className="article-heading4">Comments<span>(4)</span></h4>
                        </div>

                        <div className="separator"></div>

                        <form>
                            <textarea placeholder="your comments..." className="comments-input"/>  
                            <div className="comments-actions">
                                <div className="adds">
                                    <span>
                                        <BiSolidImageAdd/>
                                    </span>
                                    <span>
                                        <TfiClip/>
                                    </span>
                                    <span>
                                        <MdOutlineEmojiEmotions/>
                                    </span>
                                </div>
                                <div className="submit">
                                    <Button>Post comment</Button>
                                </div>
                            </div>  
                        </form>
                    </div>
                    {
                        Comments.map((elem, index) => (
                            <Comment 
                                avatar={elem.avatar} 
                                name={elem.name}
                                date={elem.date}
                                comment={elem.comment}
                                replies={elem.replies}
                                key={index}
                            />
                        ))
                    }

                </div>
            </div>
            <div className="recent-posts">
                <div className="recent-posts-inner">
                    {RecentPosts.map((elem) => {
                        return(
                            <ArticleCard
                                key={elem.id}                                                       
                                date={elem.date}
                                title={elem.title}
                                comments={elem.comments}
                                views={elem.views}
                                shares={elem.shares}
                                cover={elem.cover}
                                avatar={elem.avatar}
                                isLargeImage={elem.isLargeImage}
                                isFullCover={elem.isFullCover}                  
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogArticleDetails;