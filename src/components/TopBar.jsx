import React from "react";
import { FiSearch } from "react-icons/fi";

const TopBar = () => {
	return (
		<div className=" px-3 flex justify-between items-center">
			<h3 className="font-medium text-xl sm:text-2xl text-blue-700">
				Dashboard
			</h3>

			<div className="flex items-center justify-center  rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] py-2 px-5 w-80">
				<input
					type="text"
					placeholder="Search anything"
					className="bg-none outline-none w-full text-gray-700 placeholder-bg-none px-2 rounded-full"
				/>
				<button className="ml-2 p-2 rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-transform transform hover:scale-110 hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
					<FiSearch className="text-gray-600 text-lg transition-colors hover:text-blue-500" />
				</button>
			</div>
		</div>
	);
};

export default TopBar;
