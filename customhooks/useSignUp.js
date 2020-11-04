import { useState, useEffect } from "react";

const useSignup = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return { handleChange, values };
};

export default useSignup;
