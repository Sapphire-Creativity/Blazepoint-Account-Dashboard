import React from "react";

const Accounts = ({ user }) => {
	return (
		<div className="">
			<h3>Account information</h3>

			<h4>
				Name: {user.firstName} {user.lastName}{" "}
			</h4>
			<h4>Email: {user.email}</h4>
			<h4>Profile ID: {user.uid}</h4>
		</div>
	);
};

export default Accounts;
