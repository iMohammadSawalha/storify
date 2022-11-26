//Import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatBubbleOutline, LanguageOutlined, NotificationsActiveOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';

//import "./Navbar.css"
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" >
      <Container>
        <Navbar.Brand href="#home"> 
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto">
            <Nav.Link href="#features"><LanguageOutlined/>English</Nav.Link>
 
          </Nav>


          <Nav>

             
            <NavDropdown  title=<ChatBubbleOutline/> id="notification" align="end"  >
              <NavDropdown.Item href="#action/3.1">Ahmed sent a message (3)min ago</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Saeed sent a message (58)min ago</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Husam sent a message (2)hour ago</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Inbox
              </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown  alignleft  title=<NotificationsNoneOutlined/> id="notifications" align="end"> 
              <NavDropdown.Item  href="#action/3.5">Ahmed Added Product (3)min ago</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.6">Saeed Added Product (58)min ago</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Husam Added Product (2)hour ago</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">
                Inbox
              </NavDropdown.Item>
            </NavDropdown>
            

            <NavDropdown title=<Avatar/> id="profile" align="end">
              
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Change Password </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;