import React from "react";
import Recordings from "../components/recordings";

export default function recording() {
	const openNav = () => {
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	};

	const closeNav = () => {
		document.getElementById("mySidebar").style.width = "10px";
		document.getElementById("main").style.marginLeft = "0";
	};

	const openNav2 = () => {
		document.getElementById("mySidebar2").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		document.getElementById("sidebar2").style.boxShadow =
			"0px 0px 0px 3px #ccc;";
	};

	const closeNav2 = () => {
		document.getElementById("mySidebar2").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.getElementById("sidebar2").style.boxShadow = "0px 0px 0px 0px";
	};
	return (
		<>
			<div id="mySidebar" classNameName="sidebar">
				<img
					src="./sidebar-07/images/avatar.png"
					alt="Avatar"
					classNameName="avatar"
				/>
				<label>
					TOMAS WilSON
					<small>luckytom@rach</small>
				</label>
				<a
					href="javascript:void(0)"
					classNameName="closebtn"
					onClick={closeNav}
				>
					×
				</a>
				<div classNameName="nav1">
					<a id="atag" onClick={{ openNav2 }} href="#">
						{" "}
						<i classNameName="fa fa-home" aria-hidden="true"></i> HOME
						<i classNameName="fas fa-caret-right"></i>
					</a>
					<a id="atag" href="#">
						{" "}
						<i classNameName="fa fa-bell" aria-hidden="true"></i>Notifications
					</a>
					<a id="atag" href="#">
						{" "}
						<i classNameName="fa fa-square-o" aria-hidden="true"></i>View All
					</a>
					<a id="atag" href="#">
						{" "}
						<i classNameName="fa fa-user-o" aria-hidden="true"></i> Account
					</a>
					<a id="atag" href="#">
						{" "}
						<i classNameName="fa fa-desktop" aria-hidden="true"></i>Add new
						device
					</a>
				</div>
			</div>

			<div id="main">
				<button className="openbtn" onClick={openNav}>
					☰ Open Sidebar
				</button>
				<div id="closesidebar">
					<div id="mySidebar2" className="sidebar2">
						<strong> Select vehicle </strong>

						<div className="nav1">
							<a id="atag" href="#">
								{" "}
								Dan's Car
							</a>
							<a id="atag" href="#">
								{" "}
								Mom's Car
							</a>
							<a id="atag" href="#">
								{" "}
								Dad's Car
							</a>
							<a id="atag" href="#">
								{" "}
								Eric's Car
							</a>
							<a onClick={closeNav2}>
								<i className="fas fa-caret-left"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="row">
					<button
						id="buttonwidth"
						type="button"
						className="btn btn-primary btn_flex btn_radius_0"
					>
						<i className="fa fa-pie-chart" aria-hidden="true"></i>
						Summary
					</button>
					<button
						id="buttonwidth"
						type="button"
						className="btn btn-primary btn_flex btn_radius_0"
					>
						{" "}
						<i className="fa fa-video-camera" aria-hidden="true"></i>
						Recordings
					</button>
					<button
						id="buttonwidth"
						type="button"
						className="btn btn-primary btn_flex btn_radius_0"
					>
						{" "}
						<i className="fa fa-map-marker" aria-hidden="true"></i>
						Live GPS
					</button>
					<button
						id="buttonwidth"
						type="button"
						className="btn btn-primary btn_flex btn_radius_0"
					>
						{" "}
						<i className="fa fa-television" aria-hidden="true"></i>
						Live View
					</button>
				</div>

				<div>
					<h1>Recordings </h1>
					<text>here is something information you must know</text>
					<div className="row">
						<input
							type="search"
							className="form-control rec_search fa-search"
							placeholder="Search for video "
							aria-autocomplete="list"
							aria-expanded="false"
						/>
						<button type="button" className="btn btn-primary btn-radius_30">
							Search
						</button>
						<button type="button" className="btn btn-light btn-radius_30">
							Cancel
						</button>
					</div>

					{/* <!-- <div className="container-fluid"> --> */}
					<div className="row row-cols-1 row-cols-md-3">
						<div className="col mb-4">
							<div className="card h-100">
								<img src="./video12.PNG" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div className="col mb-4">
							<div className="card h-100">
								<img src="./video12.PNG" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">This is a short card.</p>
								</div>
							</div>
						</div>
						<div className="col mb-4">
							<div className="card h-100">
								<img src="./video12.PNG" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content.
									</p>
								</div>
							</div>
						</div>
						<div className="col mb-4">
							<div className="card h-100">
								<img src="./video12.PNG" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div className="col mb-4">
							<div className="card h-100">
								<img src="./video12.PNG" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
