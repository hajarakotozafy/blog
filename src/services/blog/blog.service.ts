import { Blogs } from "../../data/blog.data";
import { ArticleModel } from "../../model/Blog.model";

class BlogService {
  construct() {}

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async getArticles(): Promise<ArticleModel[]> {
    await this.wait(500);
    return Blogs;
  }

  public async getArticleById(id: number) {
    await this.wait(500);
    return Blogs.find((blog) => blog.id === id);
  }

  public async postArticle(blog: ArticleModel) {
    await this.wait(500);
    Blogs.push(blog);
    return "article posted";
  }

  public async deleteArticle(id: number) {
    await this.wait(500);
    Blogs.filter((blog) => blog.id !== id);
    return "article deleted";
  }
}

export default new BlogService();
