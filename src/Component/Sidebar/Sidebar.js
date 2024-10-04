import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <nav className='container'>
                <ul>
                    {SidebarData.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={`sidebar-item ${open ? 'open' : ''}`}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <span>
                        {item.icon && <span className="icon">{item.icon}</span>}
                        {item.title}
                    </span>
                    <ExpandMoreOutlinedIcon className={`toggle-btn ${open ? 'open' : ''}`} />
                </div>
                <div className={`sidebar-content ${open ? 'open' : ''}`}>
                    {item.childrens.map((child, index) => (
                        <SidebarItem key={index} item={child} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <NavLink to={item.path || "#"} className='sidebar-item plain'>
                {item.icon && <span className="icon">{item.icon}</span>}
                <span>{item.title}</span>
            </NavLink>
        );
    }
}

export default Sidebar;
