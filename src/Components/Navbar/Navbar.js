//Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LanguageOutlined, SearchOutlined } from '@mui/icons-material';
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
    <Navbar expand="lg" bg="light">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="me-1"
        />
        <Button variant="outline-dark" className='iconsColor'><SearchOutlined /></Button>
      </Form>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>

          <NavDropdown title=<LanguageOutlined className='iconsColor' /> ><NavDropdown.Item><p className='nameTxt'><LanguageOutlined className='iconsColor' /> No Other Available Language</p></NavDropdown.Item></NavDropdown>
          <p className='nameTxt'>English </p>

          <NavDropdown title=<ChatIcon className='iconsColor' /> id="messages" align="end"  >
            <NavDropdown.Item > <p className='nameTxt'> <AccountCircleIcon className='iconsColor' />Ahmed sent a message <AccessTimeFilledIcon className='iconsColor' />3 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Saleh sent a message <AccessTimeFilledIcon className='iconsColor' />58 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Husam sent a message <AccessTimeFilledIcon className='iconsColor' />2 hour ago</p></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><p className='nameTxt'><ChatIcon className='iconsColor' />Inbox</p></NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title=<NotificationsIcon className='iconsColor' /> id="notifications" align="end">
            <NavDropdown.Item  ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Samer Added Product <AccessTimeFilledIcon className='iconsColor' />3 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Hamza Added Product <AccessTimeFilledIcon className='iconsColor' />58 min ago</p></NavDropdown.Item>
            <NavDropdown.Item ><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Mazen Added Product <AccessTimeFilledIcon className='iconsColor' />2 hour ago</p></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><p className='nameTxt'><NotificationsIcon className='iconsColor' />All Notifications</p></NavDropdown.Item>
          </NavDropdown>

          <NavDropdown align="end" title=<AccountCircleIcon id="profile" className='iconsColor' /> >
            <NavDropdown.Item as={Link} to="/profile"><p className='nameTxt'><AccountCircleIcon className='iconsColor' />Profile</p></NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/profile"><p className='nameTxt'><VpnKeyIcon className='iconsColor' /> Change Password</p> </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><p className='nameTxt'><LogoutIcon className='iconsColor' /> Logout</p></NavDropdown.Item>
          </NavDropdown>
          <p className='nameTxt'>Hi,Mohammed &nbsp;&nbsp;</p>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
//Exports
export default NavBar;