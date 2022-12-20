//Imports
import { LanguageOutlined } from '@mui/icons-material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Navbar.css";
//Function
const NavBar = () => {
 return (
   <Navbar expand="lg" className='navbarbg'>
      
 
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto"></Nav>
       <Nav>
 
         <NavDropdown title=<LanguageOutlined className='iconsColormain' /> ><NavDropdown.Item><p className='nameTxt'><LanguageOutlined className='iconsColor' /> No Other Available Language</p></NavDropdown.Item></NavDropdown>
         <p className='nameTxtmain'>English </p>
 
         <NavDropdown title=<ChatIcon className='iconsColormain' /> id="messages" align="end"  >
           <NavDropdown.Item > <p className='nameTxt'> <AccountCircleIcon className='iconsColor' />Ahmed sent a message <AccessTimeFilledIcon className='iconsColor' />3 min ago</p></NavDropdown.Item>
           <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Saleh sent a message <AccessTimeFilledIcon className='iconsColor' />58 min ago</p></NavDropdown.Item>
           <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Husam sent a message <AccessTimeFilledIcon className='iconsColor' />2 hour ago</p></NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item ><p className='nameTxt'><ChatIcon className='iconsColor' />Inbox</p></NavDropdown.Item>
         </NavDropdown>
         <p className='nameTxtmain'>Messages </p>
 
         <NavDropdown title=<NotificationsIcon className='iconsColormain' /> id="notifications" align="end">
           <NavDropdown.Item  ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Samer Added Product <AccessTimeFilledIcon className='iconsColor' />3 min ago</p></NavDropdown.Item>
           <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Hamza Added Product <AccessTimeFilledIcon className='iconsColor' />58 min ago</p></NavDropdown.Item>
           <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Mazen Added Product <AccessTimeFilledIcon className='iconsColor' />2 hour ago</p></NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item ><p className='nameTxt'><NotificationsIcon className='iconsColor' />All Notifications</p></NavDropdown.Item>
         </NavDropdown>
           <p className='nameTxtmain'>Notifications </p>
 
         <NavDropdown align="end" title=<AccountCircleIcon id="profile" className='iconsColormain' /> >
           <NavDropdown.Item as={Link} to="/profile"><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Profile</p></NavDropdown.Item>
 
           <NavDropdown.Item as={Link} to="/profile"><p className='nameTxt'><VpnKeyIcon className='iconsColor' /> Change Password</p> </NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item ><p className='nameTxt'><LogoutIcon className='iconsColor' /> Logout</p></NavDropdown.Item>
         </NavDropdown>
         <p className='nameTxtmain'>Hi,Mohammed &nbsp;&nbsp;</p>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
 );
}
//Exports
export default NavBar;
