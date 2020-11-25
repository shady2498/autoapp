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
				<button  class="btn btn-outline-primary" onClick={() => setModalIsOpen(true)}>Change Pin</button>
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
					<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       {/*  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalIsOpen(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
	  <div id="divOuter">
  <div id="divInner row justify-content-center">
<input id="partitioned" type="text" maxlength="4" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==4) return false;"/>
  </div>
</div>
					<p className="text-center">Please type your pin</p>
      </div>
      <div class="modal-footer row justify-content-center">
	  <button type="button" class="btn btn-outline-primary" data-dismiss="modal" onClick={() => setModalIsOpen(false)}>Cancel</button>
        <button class="btn btn-primary">Make call</button>
      </div>
    </div>
  </div>






				</Modal>




				
			</div>
		</>
	);
}
