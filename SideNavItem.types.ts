export type SideNavItemProps = {
    icon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    name: String;
    url: String;
    collapsedItem: boolean;
    submenu: Arry;
};