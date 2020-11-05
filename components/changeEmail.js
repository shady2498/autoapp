import { faVenusDouble } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function changeEmail() {
	const [value, handleChangeEmail] = useState({ email: "sdfsdfsf" });

	const changeField = (event, value) => {
		event.preventDefault();
		// var myJSON = JSON.stringify(value);
		// console.log(myJSON);
		console.log(value.target);
	};
	return (
		<form onSubmit={(event) => changeField(event, value)}>
			<div className="input-group">
				<input
					className="input--style-1"
					type="name"
					name="name"
					placeholder="Name"
					value={value}
					onChange={handleChangeEmail}
				/>
			</div>

			<button type="submit" className="btn btn-primary btnsubmit">
				<span className="submit"> Submit </span>
			</button>
		</form>
	);
}
