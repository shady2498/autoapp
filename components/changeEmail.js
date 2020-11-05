import React, { useState } from "react";

export default function changeEmail() {
	const [value, handleChangeEmail] = useState({ name: "sdfsdfsf" });

	const changeField = (event) => {
		event.preventDefault();
		// console.log(event);
		// var myJSON = JSON.stringify(value);
		// console.log(myJSON);
		console.log(event.target.value);
	};

	const saveInput = (event) => {
		console.log(event.target.value);
	};

	return (
		<form onSubmit={(event) => saveInput(event, value)}>
			<div className="input-group">
				<input
					className="input--style-1"
					type="text"
					name="name"
					placeholder="Name"
					// onKeyPress={changeField}
					// onChange={changeField}
					onChange={changeField}
				/>
			</div>

			<button
				type="submit"
				className="btn btn-primary btnsubmit"
				// onClick={() => saveInput(value)}
			>
				<span className="submit"> Submit </span>
			</button>
		</form>
	);
}
