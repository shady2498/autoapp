import React, { useState } from "react";
export default function changePassword() {
	const [state, setState] = useState({
		oldPassword: "",
		newPassword: "",
		rePassword: "",
	});
	function handleChange(evt) {
		console.log(evt.target);
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	}
	const upDatePassword = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};
	return (
		<form onSubmit={(event) => upDatePassword(event, state.oldPassword)}>
			<h1 className="changename">Change Password</h1>
			<label className="labelpassword">Old Password</label>
			<input
				className="accountinput"
				type="password"
				name="oldPassword"
				value={state.oldPassword}
				onChange={handleChange}
			/>
			<label>New Password</label>
			<input
				className="accountinput"
				type="password"
				name="newPassword"
				value={state.newPassword}
				onChange={handleChange}
			/>
			<label>Re-Password</label>
			<input
				className="accountinput"
				type="password"
				name="rePassword"
				value={state.rePassword}
				onChange={handleChange}
			/>
			<button className="btn btn-primary  btnsave">Save</button>
		</form>
	);
}
