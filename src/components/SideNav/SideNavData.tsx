import { FaBlog as BlogIcon } from "react-icons/fa";

export const SideNavData = [
    {
        icon: <BlogIcon/>,
        name: 'Blog',
        url: '#',
        submenu: [
            {
                name: 'List',
                url: '#'
            },
            {
                name: 'Details',
                url: '#'
            },
            {
                name: 'Create',
                url: '#'
            },
            {
                name: 'Edit',
                url: '#'
            }
        ]
    },
    {
        icon: <BlogIcon/>,
        name: 'File manager',
        url: '#' 
    },
    {
        icon: <BlogIcon/>,
        name: 'Mail',
        url: '#' 
    },
    {
        icon: <BlogIcon/>,
        name: 'Chat',
        url: '#' 
    },
    {
        icon: <BlogIcon/>,
        name: 'Calendar',
        url: '#' 
    }
]