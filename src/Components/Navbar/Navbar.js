//Import
import "./Navbar.css"
import { SearchOutlined } from "@mui/icons-material"
import { LanguageOutlined } from "@mui/icons-material"
import { DarkModeOutlined } from "@mui/icons-material"
import { FullscreenExitOutlined } from "@mui/icons-material"
import { NotificationsNoneOutlined } from "@mui/icons-material"
import { ChatBubbleOutlineOutlined } from "@mui/icons-material"
import { ListOutlined } from "@mui/icons-material"
import { Avatar, Icon } from "@mui/material"
import IconButton from "@mui/material"
//Function
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search... " />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    <div className="item" >
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="item">
                        <Avatar className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}



//Export
export default Navbar;