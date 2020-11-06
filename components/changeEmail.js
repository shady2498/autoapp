import React, { useState } from "react";

// for the account page to change email
export default function changeEmail() {
	//set and change state for email
	const [state, setState] = useState({
		email: "",
	});

	//sets the state onChange
	function handleChange(evt) {
		setState({ email: evt.target.value });
	}

	// consolelog the updated state
	const upDateEmail = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};
	return (
		<>
			{/* takes email input */}
			<form onSubmit={(event) => upDateEmail(event, state.email)}>
				<label>
					Email
					<input type="email" value={state.email} onChange={handleChange} />
				</label>
			</form>
		</>
	);
}
