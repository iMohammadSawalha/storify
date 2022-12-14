import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
        {
			text: "Dashboard",
			icon: require("../../Icons/Sidebar/grid.svg").default,
			toLink: "/dashboard"
		},
		{
			text: "Products",
			icon: require("../../Icons/Sidebar/shopping-cart.svg").default,
			toLink: "/products",
		},
		{
			text: "Customers",
			icon: require("../../Icons/Sidebar/user.svg").default,
			toLink: "/customers",
		},
		{
			text: "Analytics",
			icon: require("../../Icons/Sidebar/pie-chart.svg").default,
			toLink: "/analysis",
		},
		{
			text: "invoices",
			icon: require("../../Icons/Sidebar/folder.svg").default,
			toLink: "/invoices",
		},
	
		{
			text: "Companies",
			icon: require("../../Icons/Sidebar/download.svg").default,
			toLink: "/companies",
		},
		{
			text: "Settings",
			icon: require("../../Icons/Sidebar/settings.svg").default,
			toLink: "/settings",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src={require("../../Icons/Sidebar/Logo.svg").default} alt="" />
							<h2>Storify</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(( menuItems ) => (
						<Link to={menuItems.toLink}>
							<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >
								<img className="menu-item-icon" src= {menuItems.icon} alt="" srcSet="" />
								{isExpanded && <p>{menuItems.text}</p>}
							</a>
						</Link>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src={require("../../Icons/Sidebar/admin-avatar.svg").default}
							alt=""
							srcSet=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Ayman S.</p>
							<p className="nav-footer-user-position">Store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src={require("../../Icons/Sidebar/logout.svg").default} alt="" srcSet="" />
			</div>
		</div>
	);
};


export default Sidebar;
