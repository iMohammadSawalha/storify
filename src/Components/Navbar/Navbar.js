//Import
import { LanguageOutlined, SearchOutlined } from '@mui/icons-material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search..."
            className="me-1"
          />
          <Button variant="outline-dark"><SearchOutlined /></Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">

          </Nav>
          <Nav>

            <NavDropdown title=<LanguageOutlined /> >
              <NavDropdown.Item>No Other Available Language</NavDropdown.Item>
            </NavDropdown>
            English
            <NavDropdown title=<ChatIcon /> id="messages" align="end"  >
              <NavDropdown.Item > <AccountCircleIcon />Ahmed sent a message <AccessTimeFilledIcon />3 min ago</NavDropdown.Item>
              <NavDropdown.Item ><AccountCircleIcon />Saleh sent a message <AccessTimeFilledIcon />58 min ago</NavDropdown.Item>
              <NavDropdown.Item ><AccountCircleIcon />Husam sent a message <AccessTimeFilledIcon />2 hour ago</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <ChatIcon />Inbox
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title=<NotificationsIcon /> id="notifications" align="end">
              <NavDropdown.Item  ><AccountCircleIcon />Mohammed Added Product <AccessTimeFilledIcon />3 min ago</NavDropdown.Item>
              <NavDropdown.Item ><AccountCircleIcon />Hamza Added Product <AccessTimeFilledIcon />58 min ago</NavDropdown.Item>
              <NavDropdown.Item ><AccountCircleIcon />Mazen Added Product <AccessTimeFilledIcon />2 hour ago</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <NotificationsIcon />All Notifications
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown align="end" title=<AccountCircleIcon id="profile" /> >
              <NavDropdown.Item >
                <AccountCircleIcon /> Profile</NavDropdown.Item>
              <NavDropdown.Item ><VpnKeyIcon /> Change Password </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <LogoutIcon /> Logout
              </NavDropdown.Item>
            </NavDropdown>
            Hi User &nbsp;&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;