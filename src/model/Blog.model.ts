export interface ArticleModel {
  id: number;
  date: string;
  title: string;
  comments: number;
  views: number;
  shares: number;
  cover: string;
  avatar: string;
  isFullCover?: boolean;
  isLargeImage?: boolean;
  status?: string;
  text?: string;
}
