import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import { PiBooksBold } from 'react-icons/pi';
import { FaUserCircle } from 'react-icons/fa';



export const TheSideBar =() => {

    const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar collapsed={collapsed}>
        <Menu className='p-3'>
         <main style={{ padding: 10 }}>
   
          <div className="sb-button" onClick={() => setCollapsed(!collapsed)}>
           <FaUserCircle size={30}/> User User
      
        </div>
      </main>
        </Menu>
        <Menu className='mt-4'>
          <MenuItem component={<Link to="/dashboard" />}> <BiSolidDashboard size={30} /> {" "}Dashboard</MenuItem>
          <MenuItem component={<Link to="/books" />}> <PiBooksBold size={30}/>Calendar</MenuItem>
          <MenuItem component={<Link to="/documentation" />}> <PiBooksBold size={30}/>Calendar</MenuItem>
          <MenuItem component={<Link to="/documentation" />}> <PiBooksBold size={30}/>Calendar</MenuItem>
      
        </Menu>
      </Sidebar>
      
    </div>
  );
};