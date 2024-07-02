export type CardPropsType = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: "primary" | "secondary";
    disabled?: boolean;
    status?: String,
    date: String,
    title: String,
    text?: String,
    comments: Number,
    views: Number,
    shares: Number,
    cover: any,
    avatar: any
  };