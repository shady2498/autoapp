import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

export default function changePin(props) {
	const [modalIsOpen, setModalIsOpen] = useState(props.set);
	const [state, setState] = useState({
		pin: "",
	});

	//sets the state onChange

	return (
		<>
			<div>
				{/* <button
					className="btn btn-outline-primary"
					onClick={() => setModalIsOpen(true)}
				>
					Change Pin
				</button> */}
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
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
										<input id="partitioned" type="text" maxLength="4" />
									</div>
								</div>
								<p className="text-center">Please type your pin</p>
							</div>
							<div className="modal-footer row justify-content-center">
								<button
									type="button"
									className="btn btn-outline-primary"
									data-dismiss="modal"
									onClick={() => setModalIsOpen(false)}
								>
									Cancel
								</button>
								<button className="btn btn-primary">Change Pin</button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
