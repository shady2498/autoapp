import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

export default function accountLogout() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<>
			<div>
				<button onClick={() => setModalIsOpen(true)}>Logout</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
					<h1>Logout?</h1>
					<p>Are you sure that you want to logout from auto camera app?</p>
					<div>
						<button onClick={() => setModalIsOpen(false)}>Cancel</button>
						<button>Logout</button>
					</div>
				</Modal>
			</div>
		</>
	);
}
