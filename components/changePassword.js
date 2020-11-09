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
			<label>
				Old Password
				<input
					type="password"
					name="oldPassword"
					value={state.oldPassword}
					onChange={handleChange}
				/>
			</label>
			<label>
				New Password
				<input
					type="password"
					name="newPassword"
					value={state.newPassword}
					onChange={handleChange}
				/>
			</label>
			<label>
				Re-Password
				<input
					type="password"
					name="rePassword"
					value={state.rePassword}
					onChange={handleChange}
				/>
			</label>
			{/* <button>sadads</button> */}
		</form>
	);
}
