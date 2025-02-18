import moment from "moment/moment";
import css from "./Layout.module.css";
import { FiSearch } from "react-icons/fi";
import profileImage from "../../assets/imgs/profile.png";
import Sidebar from "../Side bar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
	const { pathname } = useLocation();
	return (
		<div className={css.container}>
			<Sidebar />

			{pathname === "/" && <Navigate to="/admindashboard" />}

			<div className={css.dashboard}>
				{/*  */}
				<div className={css.topBaseGradients}>
					<div className="gradient-red"></div>

					<div className="gradient-orange"></div>
					<div className="gradient-blue"></div>
				</div>

				{/*  */}

				<div className={css.header}>
					<span>{moment().format("dddd, Do MMM YYYY")}</span>

					<div className={css.searchBar}>
						<FiSearch />
						<input type="text" placeholder="Search" />
					</div>

					<div className={css.profile}>
						<img src={profileImage} alt="person image" />

						<div className={css.details}>
							<span>Sapphire Creativity</span>
							<span>sapphirecreativity@gmail.com</span>
						</div>
					</div>
				</div>

				<div className={css.content}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
