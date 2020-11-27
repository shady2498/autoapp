import React from "react";
export default function addnewdevice() {
	return (
		<>
			<h1 className="H1Nonotification"> Add new device </h1>
			<p className="P-Nonotifications">
				Here is something information that you must to know.
			</p>

			<div className="row unknown devices">
				<div className="col-sm-5">
					<div className="card-body">
						<img
							src=".\img\louis-tricot-rHk5uvsnCn4-unsplash.jpg"
							className="img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card-body">
						<h2 className="card-title">Unknow Devices</h2>
						<p className="card-text"># 34215678443</p>
						<p className="card-text">Connected by 02!22 PM</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<a href="#" className="btn btn-primary">
							Connect
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
