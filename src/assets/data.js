import icon1 from "./images/wallet.png";
import icon2 from "./images/savings.png";
import icon3 from "./images/outcome.png";
import icon4 from "./images/income.png";

export const earningData = [
	{
		id: 1,
		title: "Total Balance",
		value: "$12,450.75",
		icon: icon1,
		currency: "USD",
		description: "Current available balance across all accounts",
		percentageChange: "+2.2%",
	},
	{
		id: 2,
		title: "Total Income",
		value: "$5,230.00",
		icon: icon3,
		currency: "USD",
		description: "Total income received this month",
		percentageChange: "+8.2%", // Compared to the previous month
	},
	{
		id: 3,
		title: "Total Savings",
		value: "$7,800.00",
		icon: icon2,
		currency: "USD",
		description: "Total amount saved in savings accounts",
		percentageChange: "+4.5%",
	},
	{
		id: 4,
		title: "Total Outcome",
		value: "$3,480.50",
		icon: icon4,
		currency: "USD",
		description: "Total expenses and payments this month",
		percentageChange: "-6.7%",
	},
];
