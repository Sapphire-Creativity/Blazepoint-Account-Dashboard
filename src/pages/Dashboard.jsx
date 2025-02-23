import React from "react";
import { earningData } from "../assets/data";

const Dashboard = () => {
	return (
		<div className="bg-red-50 w-full flex flex-col py-10 px-6 overflow-hidden">
			{/* Card Section */}
			<div className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory items-center pb-6">
				{earningData.map(
					({
						id,
						icon,
						title,
						value,
						currency,
						description,
						percentageChange,
					}) => (
						<div
							key={id}
							className="flex-shrink-0  mx-auto flex flex-col gap-4 items-center justify-between bg-white p-5 rounded-2xl shadow-neumorphic cursor-pointer transition-all duration-300 transform hover:scale-[1.05] snap-center"
						>
							<div className="flex items-center justify-between w-full">
								<img src={icon} alt={title} className="w-10 h-10" />
								<span className="text-sm font-medium text-gray-700">
									{currency}
								</span>
							</div>

							<div className="w-full">
								<h4 className="font-normal text-base text-gray-600">{title}</h4>

								<div className="flex items-center justify-between mt-1">
									<h3 className="font-semibold text-lg">{value}</h3>
									<span
										className={`text-[0.75rem] px-2 py-1 rounded-full ${
											percentageChange?.includes("-")
												? "bg-red-100 text-red-500"
												: "bg-green-100 text-green-500"
										}`}
									>
										{percentageChange}
									</span>
								</div>

								<p className="text-[0.7rem] leading-[1rem] pt-2 text-gray-500">
									{description}
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Dashboard;
