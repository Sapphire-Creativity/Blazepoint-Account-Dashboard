import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/Firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("Login Successfully!");
			toast.success("You are logged in successfully!", {
				position: "top-center",
			});

			//Delay navigation

			setTimeout(() => {
				navigate("/dashboard");
			}, 5000);
		} catch (error) {
			console.log(error.message);
			toast.error(error.message);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<ToastContainer />
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
				<form onSubmit={handleSignIn} className="space-y-4 ">
					<h2 className="text-2xl font-bold text-center text-gray-900">
						Login
					</h2>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							name="email"
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
							name="password"
							type="password"
							placeholder="Enter your password"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					<button
						type="submit"
						className="w-full px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
					>
						Login
					</button>

					<div className="text-center">
						<p>
							Don't have an account?{" "}
							<span onClick={() => navigate("/")}>Sign Up</span>
						</p>
						<p
							onClick={() => {
								navigate("/resetlogin");
							}}
						>
							Forgot Password?
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
