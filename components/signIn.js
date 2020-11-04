import React from "react";
import useForm from "../customhooks/useForm";

export default function SignIn() {
	const { handleChange, values } = useForm();
	// console.log(values);

	const saveInfo = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};

	return (
		<>
			<form onSubmit={(event) => saveInfo(event, values)}>
				<div className="input-group">
					<label htmlFor="email">
						<input
							className="input--style-1"
							type="email"
							name="email"
							placeholder="Email"
							value={values.email}
							onChange={handleChange}
						></input>
					</label>
				</div>
				<div className="input-group">
					<label htmlFor="password">
						<input
							className="input--style-1"
							type="password"
							name="password"
							placeholder="Password"
							value={values.password}
							onChange={handleChange}
						></input>
					</label>
				</div>

				<button type="submit">Signup</button>
			</form>
		</>
	);
}
