import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

// account logout modal
export default function accountlogout(props) {
	const [modalIsOpen, setModalIsOpen] = useState(props.set);
	return (
		<>
			<div>
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
										<h1>Logout?</h1>
										<p className="font-logout">
											Are you sure that you want to logout from auto camera app?
										</p>
									</div>
								</div>
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
								<button className="btn btn-primary">Logout</button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
