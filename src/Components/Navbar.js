import React, { useState } from "react";
// importing mui components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
  FaUserCircle,
  FaBell,
  FaComment,
  FaSearch,
  FaGlobeAfrica
} from "react-icons/fa";
import { fontSize, width } from "@mui/system";
//Function
const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "white" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ color: "black" }}
          sx={{ mr: 0 }}
        >
          {/*This is a simple Menu
			Icon wrapped in Icon */}
          <FaUserCircle />
        </IconButton>
        <p style={{ color: "black" }}>
          Ayman S.
          <br />
          Store Owner |
        </p>
        <t />
        <p>
          |||||
          <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ color: "black" }}
          sx={{ mr: 0 }}
        >
          <FaBell style={{color: "gray"}} />
        </IconButton>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ color: "black" }}
          sx={{ mr: 0 }}
        >
          <FaComment style={{ color: "gray" }} />
        </IconButton>

        </p>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            id="Search"
            label="Search transactions,invoices or help"
            variant="standard"
            style={ { width: 270 } }
          />
        </Box>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ color: "black" }}
          sx={{ mr: 0 }}
        >
        <FaGlobeAfrica variant="standard" style={{ color: "gray" }} />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}
const Navitem =(props) => {
  const [open,setOpen]=useState(false);
  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        props.icon
      </a>
      {open && props.children}
    </li>
  )
}
export default Navbar;
