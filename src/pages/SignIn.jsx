import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/Firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../Components/Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useUser } from "../Context/UserContext";

const SignIn = () => {
	const { fetchUserData } = useUser(); // Get fetchUserData function
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			// Fetch user details after sign-in
			await fetchUserData(user.uid);

			toast.success("You are logged in successfully!", {
				position: "top-center",
			});

			// Redirect after success
			setTimeout(() => {
				navigate("/");
			}, 3000);
		} catch (error) {
			toast.error(error.message);
		}
	};
	return (
		<div className="max-w-[50rem] sm:max-w-[70rem] mx-auto grid  grid-cols-1 sm:grid-cols-2 items-center justify-center min-h-screen bg-bg-custom-gradient py-14 px-10 gap-10">
			<div className="w-full flex items-center text-center">
				<h1 className="text-3xl text-center font-bold text-primary">
					Sign Up and Begin Your Journey{" "}
				</h1>
			</div>

			<div className="">
				<ToastContainer />
				<div className="w-full  p-8 space-y-6 bg-white rounded-xl boxShadow">
					<form onSubmit={handleSignIn} className="space-y-4 ">
						<h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
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
								className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								value={password}
								name="password"
								type="password"
								placeholder="Enter your password"
								className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>

						<button
							type="submit"
							className="w-full text-white neomorphic-button "
						>
							Login
						</button>

						<div className="text-center mt-5">
							<p>
								Don't have an account?{" "}
								<span
									onClick={() => navigate("/signup")}
									className="text-blue-900  font-medium cursor-pointer"
								>
									Sign Up
								</span>
							</p>
							<p
								onClick={() => {
									navigate("/resetlogin");
								}}
								className="text-blue-900 font-medium cursor-pointer"
							>
								Forgot Password?
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
