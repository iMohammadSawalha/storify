//Import
import { ChatBubbleOutlineOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import "./Navbar.css"
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