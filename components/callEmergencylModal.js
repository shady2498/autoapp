import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

export default function callEmergencylModal() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<>
			<div>
				<button onClick={() => setModalIsOpen(true)}>Call 911</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
					<h1>Make call to 911?</h1>
					<p>Are you sure that you want to call the 911 emergency service?</p>
					<div>
						<button onClick={() => setModalIsOpen(false)}>close</button>
						<button>Make call</button>
					</div>
				</Modal>
			</div>
		</>
	);
}
