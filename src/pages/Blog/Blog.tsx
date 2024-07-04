import { FC } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import "./Blog.scss";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Button from "../../components/Button/Button";

import { BiLoaderCircle } from "react-icons/bi";

import { useInfiniteScroll } from "../../hooks/useInfiniteScrool";

const Blog: FC = () => {
  const { articles, lastElement, isFetching } = useInfiniteScroll();

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

        <div className="blogs-container" ref={lastElement}>
          {articles
            .filter((elem) => !elem.status)
            .map((elem) => (
              <ArticleCard
                id={elem.id}
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
        {isFetching && (
          <div className="blog-load-more">
            <Button color="white">
              <BiLoaderCircle />
              <span>Load more</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
