import React from "react";

export default function changeName() {
	//set and change state for name
	const [state, setState] = useState({
		name: "",
	});

	//sets the state onChange
	function handleChange(evt) {
		setState({ name: evt.target.value });
	}

	// consolelog the updated state
	const upDateName = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};
	return (
		<>
			{/* takes email input */}
			<form onSubmit={(event) => upDateName(event, state.name)}>
				<label>
					Name
					<input type="text" value={state.name} onChange={handleChange} />
				</label>
			</form>
		</>
	);
}
