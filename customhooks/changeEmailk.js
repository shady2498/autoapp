import { useState, useEffect } from "react";

const changeEmailk = () => {
	const [fields, handleChangeEmail] = useState({ email: "ssssss" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return { handleChange, values };
};

export default changeEmailk;
