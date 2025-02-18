import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Components/Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSignIn = async (e) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password) {
			toast.error("Please fill out all fields.", { position: "top-center" });
			return;
		}

		setLoading(true);

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = auth.currentUser;

			if (user) {
				await setDoc(doc(db, "Users", user.uid), {
					email: user.email,
					firstName,
					lastName,
				});
			}

			toast.success("Registered Successfully!", { position: "top-center" });
			setLoading(false);

			//delay navigation
			setTimeout(() => {
				navigate("/dashboard");
			}, 5000);
		} catch (error) {
			console.error("Error during registration:", error);
			toast.error("Unable to register. Please try again later.", {
				position: "bottom-center",
			});
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col sm:flex-row items-stretch justify-center min-h-screen bg-bg-custom-gradient py-14 px-20 gap-5">
			<div className="w-full flex items-center text-center">
				<h1 className="text-3xl font-bold text-gray-700">
					Sign Up and Begin Your Journey{" "}
				</h1>
			</div>

			<ToastContainer />
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadowOne mx-auto">
				<form onSubmit={handleSignIn} className="space-y-4">
					<h2 className="text-2xl font-bold text-center text-gray-900">
						Sign Up
					</h2>
					<div className="flex flex-col gap-3">
						<input
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
							type="text"
							placeholder="First Name"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
						<input
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
							type="text"
							placeholder="Last Name"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
							placeholder="Email"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<input
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							type="password"
							placeholder="Password"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<button
						type="submit"
						className="neomorphic-button w-full"
						disabled={loading}
					>
						{loading ? "Processing..." : "Sign Up"}
					</button>

					<div className="text-center ">
						<p>
							Already have an account?{" "}
							<span
								className="text-indigo-900 font-semibold"
								onClick={() => {
									navigate("/signin");
								}}
							>
								Sign In
							</span>{" "}
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
