import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './Pages/Settings';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>

<div className='main-container'>
        <Sidebar isOpen={sidebarOpen} />

        <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
      <nav className='navbar'>
        <ul className='left-navbar'>
          <li>
            <NavLink> <MenuOutlinedIcon onClick={toggleSidebar} style={{ cursor: 'pointer' }}/></NavLink>
           </li>
          <li className="search-container">
            <input type='text' placeholder='Search'/>
            <SearchOutlinedIcon className="search-icon"/>
          </li>
        </ul>
        <ul className='right-navbar'>
          <li>
            <NavLink to='/settings' ><SettingsOutlinedIcon/></NavLink>
          </li>
          <li>
            <NavLink to="/notifications"><NotificationsNoneOutlinedIcon/></NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default Navbar;
