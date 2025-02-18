import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = ({ user }) => {
	const [collapsed, setCollapsed] = useState(false);

	// Function to toggle sidebar
	const toggleSidebar = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className="flex w-full min-h-screen">
			{/* Sidebar */}
			<div
				className={`h-screen transition-all duration-300 ${
					collapsed ? "w-[5rem]" : "w-[16rem]"
				}`}
			>
				<SideBar
					collapsed={collapsed}
					toggleSidebar={toggleSidebar}
					user={user}
				/>
			</div>

			{/* Main Content Area */}
			<div
				className={`flex flex-col flex-1 min-h-screen transition-all duration-300 bg-accent ${
					collapsed ? "ml-[1rem]" : "ml-auto"
				}`}
			>
				{/* TopBar */}
				<div className="w-full px-4 py-4 bg-accent shadowOne">
					<TopBar />
				</div>

				{/* Outlet Section (Page Content) */}
				<div className="flex-1 p-6 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
