import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

// account logout modal
export default function accountlogout() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<>
			<div>
				<button
					class="btn btn-outline-primary"
					onClick={() => setModalIsOpen(true)}
				>
					Logout
				</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								{/*  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
									onClick={() => setModalIsOpen(false)}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body text-center">
								<div id="divOuter">
									<div id="divInner row justify-content-center">
										<h1>Logout?</h1>
										<p className="font-logout">
											Are you sure that you want to logout from auto camera app?
										</p>
									</div>
								</div>
							</div>
							<div class="modal-footer row justify-content-center">
								<button
									type="button"
									class="btn btn-outline-primary"
									data-dismiss="modal"
									onClick={() => setModalIsOpen(false)}
								>
									Cancel
								</button>
								<button class="btn btn-primary">Logout</button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
