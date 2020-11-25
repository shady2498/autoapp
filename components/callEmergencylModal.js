import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("*");

export default function callEmergencylModal() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<>
			<div>
				<button  class="btn btn-outline-primary" onClick={() => setModalIsOpen(true)}>Call 911</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
			          <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       {/*  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalIsOpen(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
	  <h1>Make call to 911?</h1>
					<p>Are you sure that you want to call the 911 emergency service?</p>
      </div>
      <div class="modal-footer row justify-content-center">
	  <button type="button" class="btn btn-outline-primary" data-dismiss="modal" onClick={() => setModalIsOpen(false)}>Cancel</button>
        <button class="btn btn-primary">Make call</button>
      </div>
    </div>
  </div>

					{/* <h1>Make call to 911?</h1>
					<p>Are you sure that you want to call the 911 emergency service?</p>
					<div>
						<button onClick={() => setModalIsOpen(false)}>close</button>
						<button>Make call</button>
					</div> */}
				</Modal>
			</div>
		</>
	);
}
