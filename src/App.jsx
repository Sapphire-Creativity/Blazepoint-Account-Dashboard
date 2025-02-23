import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetLogin from "./pages/ResetLogin";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import MyWallet from "./pages/MyWallet";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";
import { useState } from "react";
import { UserProvider } from "./Context/UserContext";

function App() {
	const [user, setUser] = useState(null);

	return (
		<UserProvider>
			<Routes>
				{/* Public Routes */}
				<Route path="signin" element={<SignIn />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="resetlogin" element={<ResetLogin />} />

				{/* Protected Routes with Layout */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="analytics" element={<Analytics />} />
					<Route path="mywallet" element={<MyWallet />} />
					<Route path="transactions" element={<Transactions />} />
					<Route path="account" element={<Accounts />} />
					<Route path="setting" element={<Settings />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</UserProvider>
	);
}

export default App;
