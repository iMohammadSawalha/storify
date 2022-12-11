import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import "./sidebar.scss";
import { Link } from 'react-router-dom';


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
                
                <Link to="/home">
                <li>
                    <AddHomeOutlinedIcon className="icon"/>
                    <span>Home</span>
                </li>
                </Link>
                <Link to="/dashboard">
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">SCOPE</p>
                <Link to="/products">
                <li>
                    <AddShoppingCartOutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>

                <Link to="/customers">
                    <li>
                        <PeopleOutlineOutlinedIcon className="icon"/>
                        <span>Customers</span>
                    </li>
                </Link>

                <Link to="/companies">
                <li>
                    <ApartmentIcon className="icon"/>
                    <span>Companies</span>
                </li>
                </Link>

            <p className="title">DATA</p>
            <Link to="/invoices">
                <li>
                    <ReceiptLongOutlinedIcon className="icon"/>
                    <span>Invoices</span>
                </li>
            </Link>

            <Link to="/analysis">
                <li>
                    <AnalyticsOutlinedIcon className="icon"/>
                    <span>Analysis</span>
                </li>
            </Link>

            <p className="title">SETTINGS</p>
            <Link to="/profile">
                <li>
                    <BadgeOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
            </Link>
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