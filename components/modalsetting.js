import React from "react";

export default function modalsetting() {
	return (
		<div>
			<a
				className="mb-xs mt-xs mr-xs modal-basic btn btn-default"
				href="#modalCenterIcon"
			>
				Center Icon
			</a>
			<div
				id="modalCenterIcon"
				className="modal-block modal-block-primary mfp-hide"
			>
				<section className="panel">
					<div className="panel-body text-center">
						<div className="modal-wrapper">
							<div className="modal-icon center">
								<i className="fa fa-question-circle"></i>
							</div>
							<div className="modal-text">
								<h4>Are you sure?</h4>
								<p>Are you sure that you want to delete this image?</p>
							</div>
						</div>
					</div>
					<footer className="panel-footer">
						<div className="row">
							<div className="col-md-12 text-right">
								<button className="btn btn-primary modal-confirm">
									Confirm
								</button>
								<button className="btn btn-default modal-dismiss">
									Cancel
								</button>
							</div>
						</div>
					</footer>
				</section>
			</div>
		</div>
	);
}
