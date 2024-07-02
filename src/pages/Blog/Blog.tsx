import { FC, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import "./Blog.scss";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Button from "../../components/Button/Button";

import { BiLoaderCircle } from "react-icons/bi";
import { ArticleModel } from "../../model/Blog.model";
import blogService from "../../services/blog/blog.service";

const Blog: FC = () => {
  const [articles, setArticles] = useState<Array<ArticleModel>>([]);

  useEffect(() => {
    getListArticles();
  }, []);

  const getListArticles = async () => {
    try {
      const articles = await blogService.getArticles();
      setArticles(articles);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-inner">
        <div className="blog-header">
          <div className="blog-title">
            <h3>Blog</h3>
          </div>
        </div>
        <div className="blog-filter">
          <div className="search-bar">
            <IoIosSearch />
            <input placeholder="Search..." />
          </div>
          <div className="filter-button">
            <p>Sort By</p>
            <p>Latest</p>
            <IoIosArrowDown />
          </div>
        </div>

        <div className="blogs-container">
          {articles.map((elem) => (
            <ArticleCard
              key={elem.id}
              date={elem.date}
              title={elem.title}
              comments={elem.comments}
              views={elem.views}
              shares={elem.shares}
              cover={elem.cover}
              avatar={elem.avatar}
              isLargeImage={elem?.isLargeImage}
              isFullCover={elem?.isFullCover}
            />
          ))}
        </div>
        <div className="blog-load-more">
          <Button color="white">
            <BiLoaderCircle />
            <span>Load more</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
