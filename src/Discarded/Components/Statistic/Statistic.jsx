import React from "react";
import css from "./Statistic.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../assets/Data";
import StatisticChart from "../Statistic Chart/StatisticChart";
const Statistic = () => {
	return (
		<div className={`${css.container} theme-container`}>
			<span className={css.title}>Overview Statistics</span>

			<div className={`${css.cards} grey-container`}>
				<div>
					<div className={css.arrowIcon}>
						<BsArrowUpShort />
					</div>

					<div className={css.card}>
						<span>Top item this month</span> <span>Office Comps</span>
					</div>
				</div>

				<div className={css.card}>
					<span>Items</span>
					<span>${groupNumber(455)}</span>
				</div>
				<div className={css.card}>
					<span>Profit</span>
					<span>${groupNumber(370000)}</span>
				</div>
				<div className={css.card}>
					<span>Daily Average</span>
					<span>${groupNumber(20000)}</span>
				</div>
			</div>

			<StatisticChart />
		</div>
	);
};

export default Statistic;
