import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
        {
			id:0,
			text: "Dashboard",
			icon: require("../../Icons/Sidebar/grid.svg").default,
			toLink: "/dashboard"
		},
		{
			id:1,
			text: "Products",
			icon: require("../../Icons/Sidebar/shopping-cart.svg").default,
			toLink: "/products",
		},
		{
			id:2,
			text: "Customers",
			icon: require("../../Icons/Sidebar/user.svg").default,
			toLink: "/customers",
		},
		{
			id:3,
			text: "Orders",
			icon: require("../../Icons/Sidebar/pie-chart.svg").default,
			toLink: "/orders",
		},
		{
			id:4,
			text: "invoices",
			icon: require("../../Icons/Sidebar/folder.svg").default,
			toLink: "/invoices",
		},
	
		{
			id:5,
			text: "Companies",
			icon: require("../../Icons/Sidebar/book-open.svg").default,
			toLink: "/companies",
		},
		{
			id:6,
			text: "Discounts",
			icon: require("../../Icons/Sidebar/percent.svg").default,
			toLink: "/discounts",
		},
		{
			id:7,
			text: "Coupons",
			icon: require("../../Icons/Sidebar/credit-card.svg").default,
			toLink: "/coupons",
		},
		{
			id:8,
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
						<Link key={menuItems.id} to={menuItems.toLink}>
							<div key={menuItems.id} className={isExpanded ? "side-menu-item" : "side-menu-item menu-item-NX"}>
								<div key={menuItems.id} className="d-flex my-auto mr-auto" >
									<img key={menuItems.id+'a'} className="side-menu-item-icon" src= {menuItems.icon} alt="" srcSet=""/>
									{isExpanded && <p key={menuItems.id+'b'} className="my-auto">{menuItems.text}</p>}
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
							<p className="side-nav-footer-user-name">Mohammed</p>
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
