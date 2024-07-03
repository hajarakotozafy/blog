import { ArticleModel } from "../../model/Blog.model";

class BlogService {
  private endPoint: string = "http://localhost:5173";
  construct() {}

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async getArticles({ page }: { page: number }) {
    try {
      const offset = page ? page : 0;
      console.log("page:", page);
      await this.wait(500);
      const res = await fetch(`${this.endPoint}/data/blog.data.json`);
      const data = await res.json();
      const articles = data.slice((page - 1) * 3, page * 3);
      return {
        results: articles as ArticleModel[],
        offset: offset + 1,
      };
    } catch (error) {
      throw error;
    }
  }

  public async getArticleById(id: number) {
    await this.wait(500);
    const res = await fetch(`http://localhost:5173/data/blog.data.json`);
    return res.json();
  }

  // public async postArticle(blog: ArticleModel) {
  //   await this.wait(500);
  //   Blogs.push(blog);
  //   return "article posted";
  // }

  // public async deleteArticle(id: number) {
  //   await this.wait(500);
  //   Blogs.filter((blog) => blog.id !== id);
  //   return "article deleted";
  // }
}

export default new BlogService();
