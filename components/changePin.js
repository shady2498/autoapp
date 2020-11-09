import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

export default function changePin() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [state, setState] = useState({
		pin: "",
	});

	//sets the state onChange
	function handleChange(evt) {
		setState({ pin: evt.target.value });
	}

	// consolelog the updated state
	const upDateName = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};
	return (
		<>
			<div>
				<button onClick={() => setModalIsOpen(true)}>Change Pin</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
					<form onSubmit={(event) => upDateName(event, state.pin)}>
						<label>
							Pin
							<input type="number" value={state.pin} onChange={handleChange} />
						</label>
					</form>
					<p>Please Type your pin</p>
					<div>
						<button onClick={() => setModalIsOpen(false)}>close</button>
						<button>Submit</button>
					</div>
				</Modal>
			</div>
		</>
	);
}
