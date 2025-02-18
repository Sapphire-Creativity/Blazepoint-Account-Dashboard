import React, { useState } from "react";
import { auth } from "../Components/Firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetLogin = () => {
	const [email, setEmail] = useState("");

	//
	//Password reset
	const handlePasswordReset = (e) => {
		e.preventDefault();

		sendPasswordResetEmail(auth, email);
		if (!email) {
			toast.error("Please input your email.", { position: "top-center" });
			return;
		}

		toast.success(
			"Email sent! Check your inbox for password reset instructions.",
			{
				position: "top-center",
			}
		);
		setEmail("");
	};
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<ToastContainer />
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
				<form onSubmit={handlePasswordReset} className="space-y-4 ">
					<h2 className="text-2xl font-bold text-center text-gray-900">
						Login
					</h2>
					<div>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							name="email"
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
					>
						Reset Password
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetLogin;
