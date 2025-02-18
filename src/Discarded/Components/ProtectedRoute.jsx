import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Components/Firebase/config";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const [user] = useAuthState(auth);
	if (!user) {
		return <Navigate to={"/signin"} />;
	}

	return children;
};

export default ProtectedRoute;
