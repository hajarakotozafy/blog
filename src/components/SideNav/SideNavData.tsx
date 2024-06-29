import { FaBlog as BlogIcon } from "react-icons/fa";
import { TbFloatLeft } from "react-icons/tb";
import { MdFolderOpen } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsWalletFill } from "react-icons/bs";
import { GiGolfFlag } from "react-icons/gi";
export const SideNavData = [
    {
        icon: <TbFloatLeft/>,
        name: 'Blog',
        url: '/blog',
        collapsedItem: false,
        submenu: [
            {
                name: 'List',
                url: '/blog/list'
            },
            {
                name: 'Details',
                url: '/blog/details'
            },
            {
                name: 'Create',
                url: '/blog/create'
            },
            {
                name: 'Edit',
                url: '/blog/edit'
            }
        ]
    },
    {
        icon: <MdFolderOpen/>,
        name: 'File manager',
        url: '/file-manager',
        collapsedItem: false,
    },
    {
        icon: <IoMailOpenOutline/>,
        name: 'Mail',
        url: '/mail',
        collapsedItem: false,
    },
    {
        icon: <HiOutlineChatBubbleLeftRight/>,
        name: 'Chat',
        url: '/chat',
        collapsedItem: false,
    },
    {
        icon: <HiOutlineCalendar/>,
        name: 'Calendar',
        url: '/calendar',
        collapsedItem: false,
    },
    {
        icon: <BsWalletFill/>,
        name: 'Job',
        url: '/job',
        collapsedItem: true, 
        submenu: []
    },
    {
        icon: <GiGolfFlag/>,
        name: '',
        url: '#',
        collapsedItem: true,
        submenu: []
    }
]