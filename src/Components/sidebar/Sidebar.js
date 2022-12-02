import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import "./sidebar.scss";



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <StoreMallDirectoryOutlinedIcon className="icon-main"/>
            <span className="logo">Gentlemen's Store</span>
        </div>
        <hr />
        <div className="centre">
        <ul>
                <h1 className="title-main">Main Menu</h1>
                <p className="title">MAIN</p>

                <li>
                    <AddHomeOutlinedIcon className="icon"/>
                    <span>Home</span>
                </li>
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashbaord</span>
                </li>
                <p className="title">SCOPE</p>

                <li>
                    <AddShoppingCartOutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>


                <li>
                        <PeopleOutlineOutlinedIcon className="icon"/>
                    <span>Customers</span>
                </li>

                <li>
                    <CalendarMonthOutlinedIcon className="icon"/>
                    <span>Calendar</span>
                </li>


            <p className="title">DATA</p>

                <li>
                    <ReceiptLongOutlinedIcon className="icon"/>
                    <span>Invoices</span>
                </li>

                <li>
                    <AnalyticsOutlinedIcon className="icon"/>
                    <span>Analysis</span>
                </li>

            <p className="title">SETTINGS</p>

                <li>
                    <BadgeOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <SettingsSuggestOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
        </ul>
           
        </div>
    </div>


  );
}

export default Sidebar;