import React from "react";
import css from "./AdminDashboard.module.css";
import { cardsData, groupNumber } from "../../assets/Data";
import Statistic from "../../Components/Statistic/Statistic";
import Orders from "../../Components/Orders/Orders";
//
//
const AdminDashboard = () => {
	return (
		<div className={css.container}>
			{/* left side */}
			<div className={css.dashboard}>
				<div className={`${css.dashboardHead} theme-container`}>
					<div className={css.head}>
						<span>Dashboard</span>

						<div className={css.durationButton}>
							<select>
								<option value="">1 week</option>
								<option value="">1 month</option>
								<option value="">1 year</option>
							</select>
						</div>
					</div>
					<div className="flex items-center justify-center">
						{cardsData.map((card, index) => (
							<div className=d>
								<div className={css.cardHead}>
									<span>{card.title}</span>
									<span>+{card.change}</span>
								</div>

								<div className={css.cardAmount}>
									<span>$</span>
									<span>{groupNumber(card.amount)}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<Statistic />
			</div>

			<Orders />
		</div>
	);
};

export default AdminDashboard;
