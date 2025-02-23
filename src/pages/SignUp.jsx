import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Components/Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../Context/UserContext";

const SignUp = () => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const { fetchUserData } = useUser();

	const handleSignUp = async (e) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password) {
			toast.error("Please fill out all fields.", { position: "top-center" });
			return;
		}

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			// Store user details in Firestore
			await setDoc(doc(db, "Users", user.uid), {
				email: user.email,
				firstName,
				lastName,
			});

			// Fetch and update user details
			fetchUserData(user.uid);

			toast.success("Registered Successfully!", { position: "top-center" });

			// Redirect after success
			setTimeout(() => {
				navigate("/");
			}, 3000);
		} catch (error) {
			toast.error(error.message, { position: "bottom-center" });
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
				<div className="w-full max-w-md m-auto p-8 space-y-6 bg-white rounded-xl  boxShadow">
					<form onSubmit={handleSignUp} className="space-y-4">
						<h2 className="text-2xl font-bold text-center text-gray-900 ">
							Sign Up
						</h2>
						<div className="flex flex-col gap-5">
							<input
								onChange={(e) => setFirstName(e.target.value)}
								value={firstName}
								type="text"
								placeholder="First Name"
								className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
							<input
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
								type="text"
								placeholder="Last Name"
								className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<input
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								type="email"
								placeholder="Email"
								className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<div className="mb-20">
							<input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								type="password"
								placeholder="Password"
								className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<button
							type="submit"
							className="neomorphic-button my-20"
							disabled={loading}
						>
							{loading ? "Processing..." : "Sign Up"}
						</button>

						<div className="text-center ">
							<p>
								Already have an account?{" "}
								<span
									className="text-primary font-medium cursor-pointer"
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
		</div>
	);
};

export default SignUp;
