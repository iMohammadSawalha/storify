//Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LanguageOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
//Function
const NavBar = () => {
  return (
    <Navbar expand="md" className='navbarbg' fixed='top'>



      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>


          <NavDropdown title=<p className='nameTxtmain'>< LanguageOutlined className='iconsColormain' />Language</p> > <NavDropdown.Item><p className='nameTxt'><LanguageOutlined className='iconsColor' /> No Other Available Language</p></NavDropdown.Item></NavDropdown>

          <NavDropdown id="messages" align="end" title=  <p className='nameTxtmain'><ChatIcon className='iconsColormain' /> Messages </p>  >
            <NavDropdown.Item > <p className='nameTxt'> <AccountCircleIcon className='iconsColor' />Ahmed sent a message <AccessTimeFilledIcon className='iconsColor' />3 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Saleh sent a message <AccessTimeFilledIcon className='iconsColor' />58 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Husam sent a message <AccessTimeFilledIcon className='iconsColor' />2 hour ago</p></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><p className='nameTxt'><ChatIcon className='iconsColor' />Inbox</p></NavDropdown.Item>
          </NavDropdown>
       


          <NavDropdown id="notifications" align="end" title= <p className='nameTxtmain'>< NotificationsIcon className='iconsColormain' />  Notifications </p> >
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Samer Added Product <AccessTimeFilledIcon className='iconsColor' />3 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Hamza Added Product <AccessTimeFilledIcon className='iconsColor' />58 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Mazen Added Product <AccessTimeFilledIcon className='iconsColor' />2 hour ago</p></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><p className='nameTxt'><NotificationsIcon className='iconsColor' />All Notifications</p></NavDropdown.Item>
          </NavDropdown>
       


          <NavDropdown align="end" title=<p className='nameTxtmain'>< AccountCircleIcon  id="profile" className='iconsColormain' /> Hi,Mohammed &nbsp;&nbsp;</p> >
            <NavDropdown.Item as={Link} to="/profile"><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Profile</p></NavDropdown.Item>


            <NavDropdown.Item as={Link} to="/profile"><p className='nameTxt'><VpnKeyIcon className='iconsColor' /> Change Password</p> </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><p className='nameTxt'><LogoutIcon className='iconsColor' /> Logout</p></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
//Exports
export default NavBar;