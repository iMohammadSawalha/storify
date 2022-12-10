import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
    const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
	
        {
			text: "Dashboard",
			icon: "icons/grid.svg",
		
		},
		{
			text: "Products",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Customers",
			icon: "icons/user.svg",
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "invoices",
			icon: "icons/folder.svg",
		},
	
		{
			text: "Companies",
			icon: "icons/download.svg",
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
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
							<img src="icons/Logo.svg" alt="" srcset="" />
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
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Ayman S.</p>
							<p className="nav-footer-user-position">Store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};


export default Sidebar;
