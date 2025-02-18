import React from "react";
import profilePhoto from "../assets/images/profile-photo.png";
import brandlogo from "../assets/images/brand-logo.png";
import { NavLink } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import {
	FaHome,
	FaChartLine,
	FaWallet,
	FaExchangeAlt,
	FaUser,
	FaCog,
	FaBars,
} from "react-icons/fa";

const SideBar = ({ collapsed, toggleSidebar, user }) => {
	return (
		<div
			className={`relative bg-primary text-white h-screen p-5 shadowTwo flex flex-col rounded-tr-[20px] rounded-br-[15px] transition-all duration-500 
            ${
							collapsed
								? "w-[5rem] overflow-hidden"
								: "w-[16rem] overflow-y-auto"
						}`}
		>
			{/* Toggle Button - Always at the Top */}
			<button
				className="absolute top-5 right-5 bg-accent text-white p-2 rounded-md shadow-md"
				onClick={toggleSidebar}
			>
				<FaBars />
			</button>

			{/* Logo */}
			<div className={`p-2 ${collapsed ? "hidden" : "block"}`}>
				<img
					src={brandlogo}
					alt="Logo"
					className="w-6rem lg:max-w-[8rem] m-auto"
				/>
			</div>

			{/* User Info */}
			{!collapsed && (
				<div className="flex flex-col items-center justify-center mt-7 w-full mx-auto">
					{/* Profile Image */}
					<div className="relative w-20 h-20 rounded-full overflow-hidden bg-white shadow-md">
						<img
							src={profilePhoto}
							alt="Profile"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Text Content */}
					<div className="text-center mt-4 text-white w-full">
						<h2 className="text-[0.85rem] lg:text-lg font-semibold">
							Hello, {user.firstName || "Guest"}! 👋
						</h2>
						<p>{user.email}</p>
						<p>{user.uid}</p>
						<p className="text-xs mt-2">Welcome to your dashboard.</p>
					</div>
				</div>
			)}

			{/* Menu listing */}
			<div className=" overflow-y-auto mt-7 py-10 border-t-1 flex flex-col gap-3 flex-grow">
				<NavLink to="/" className="flex items-center gap-3 text-base py-3 pl-5">
					<FaHome className="text-[1.2rem]" />
					{!collapsed && "Dashboard"}
				</NavLink>
				<NavLink
					to="mywallet"
					className="flex items-center gap-3 text-base py-3 pl-5"
				>
					<FaWallet className="text-[1.2rem]" />
					{!collapsed && "My Wallet"}
				</NavLink>
				<NavLink
					to="analytics"
					className="flex items-center gap-3 text-base py-3 pl-5"
				>
					<FaChartLine className="text-[1.2rem]" />
					{!collapsed && "Analytics"}
				</NavLink>
				<NavLink
					to="transactions"
					className="flex items-center gap-3 text-base py-3 pl-5"
				>
					<FaExchangeAlt className="text-[1.2rem]" />
					{!collapsed && "Transactions"}
				</NavLink>
				<NavLink
					to="account"
					className="flex items-center gap-3 text-base py-3 pl-5"
				>
					<FaUser className="text-[1.2rem]" />
					{!collapsed && "Account"}
				</NavLink>
				<NavLink
					to="setting"
					className="flex items-center gap-3 text-base py-3 pl-5"
				>
					<FaCog className="text-[1.2rem]" />
					{!collapsed && "Settings"}
				</NavLink>
				<NavLink
					to="/signin"
					className="flex items-center gap-3 text-base py-3 pl-5"
				>
					<SlLogout className="text-[1.2rem]" />
					{!collapsed && "Log out"}
				</NavLink>
			</div>
		</div>
	);
};

export default SideBar;
