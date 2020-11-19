import React from "react";
import useForm from "../customhooks/useForm";

export default function SignIn() {
	const { handleChange, values } = useForm();

	const signInInfo = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};
	return (
		<form onSubmit={(event) => signInInfo(event, values)}>
			<div className="input-group">
				<input
					className="input--style-1"
					type="name"
					name="name"
					placeholder="Name"
					value={values.name}
					onChange={handleChange}
				/>
			</div>

			<div className="input-group">
				<input
					className="input--style-1"
					type="email"
					name="email"
					placeholder="Email"
					value={values.email}
					onChange={handleChange}
				/>
			</div>

			<div className="input-group">
				<input
					className="input--style-1"
					type="password"
					name="password"
					placeholder="Password"
					value={values.password}
					onChange={handleChange}
				/>
			</div>

			<div className="input-group">
				<input
					type="pincode"
					name="pincode"
					placeholder="PINCode"
					value={values.pincode}
					onChange={handleChange}
				/>
			</div>

			<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary btn-lg btn-block">Sign Up</button>
		</form>
	);
}
