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
			icon: require("../../Icons/Sidebar/book-open.svg").default,
			toLink: "/companies",
		},
		{
			text: "Discounts",
			icon: require("../../Icons/Sidebar/percent.svg").default,
			toLink: "/discounts",
		},
		{
			text: "Coupons",
			icon: require("../../Icons/Sidebar/credit-card.svg").default,
			toLink: "/coupons",
		},
		{
			text: "Profile",
			icon: require("../../Icons/Sidebar/info.svg").default,
			toLink: "/profile",
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
			<div className="side-nav-upper">
				<div className="side-nav-heading">
					{isExpanded && (
						<div className="side-nav-brand">
							<img src={require("../../Icons/Sidebar/Logo.svg").default} alt="" />
							<h1>Storify</h1>
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
				<div className="side-nav-menu">
					{menuItems.map(( menuItems ) => (
						<Link to={menuItems.toLink}>
							<div className={isExpanded ? "side-menu-item" : "side-menu-item menu-item-NX"} >
								<div className="d-flex my-auto mr-auto">
									<img className="side-menu-item-icon" src= {menuItems.icon} alt="" srcSet="" />
									{isExpanded && <p className="my-auto">{menuItems.text}</p>}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="side-nav-footer">
				{isExpanded && (
					<div className="side-nav-details">
						<img
							className="side-nav-footer-avatar"
							src={require("../../Icons/Sidebar/admin-avatar.svg").default}
							alt=""
							srcSet=""
						/>
						<div className="side=nav-footer-info">
							<p className="side-nav-footer-user-name">Ayman S.</p>
							<p className="side-nav-footer-user-position">Store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src={require("../../Icons/Sidebar/logout.svg").default} alt="" srcSet="" />
			</div>
		</div>
	);
};


export default Sidebar;
