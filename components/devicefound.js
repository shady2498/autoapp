import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

export default function devicefound() {
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
				<button
					className="btn btn-outline-primary"
					onClick={() => setModalIsOpen(true)}
				>
					Connection
				</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
					{/* 	<form onSubmit={(event) => upDateName(event, state.pin)}>
						<label>
							Pin
							<input type="number" value={state.pin} onChange={handleChange} />
						</label>
					</form>
					<p>Please Type your pin</p>
					<div>
						<button onClick={() => setModalIsOpen(false)}>close</button>
						<button>Submit</button>
					</div> */}
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								{/*  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
									onClick={() => setModalIsOpen(false)}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body text-center">
								<div id="divOuter">
									<div id="divInner row justify-content-center">
										<h2>Device not found !</h2>
										<p>
											We couldn't find a new device near you, please check the
											internet connections on all your devices
										</p>
									</div>
								</div>
							</div>
							<div className="modal-footer row justify-content-center">
								{/*  <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={() => setModalIsOpen(false)}>Cancel</button> */}
								<button className="btn btn-primary">Try Again</button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
