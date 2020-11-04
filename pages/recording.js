import React from "react";
import Recordings from "../components/recordings";
import Link from "next/link";

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
			<div id="mySidebar" className="sidebar">
				<img
					src="./sidebar-07/images/avatar.png"
					alt="Avatar"
					className="avatar"
				/>
				<label>
					TOMAS WilSON
					<small>luckytom@rach</small>
				</label>
				<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
					×
				</a>
				<div className="nav1">
					<a id="atag" onClick={{ openNav2 }} href="#">
						{" "}
						<i className="fa fa-home" aria-hidden="true"></i> HOME
						<i className="fas fa-caret-right"></i>
					</a>
					<a id="atag" href="#">
						{" "}
						<i className="fa fa-bell" aria-hidden="true"></i>Notifications
					</a>
					<a id="atag" href="#">
						{" "}
						<i className="fa fa-square-o" aria-hidden="true"></i>View All
					</a>
					<a id="atag" href="#">
						{" "}
						<i className="fa fa-user-o" aria-hidden="true"></i> Account
					</a>
					<a id="atag" href="#">
						{" "}
						<i className="fa fa-desktop" aria-hidden="true"></i>Add new device
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
					<Link href="/recording">
						<button
							id="buttonwidth"
							type="button"
							className="btn btn-primary btn_flex btn_radius_0"
						>
							{" "}
							<i className="fa fa-video-camera" aria-hidden="true"></i>
							Recordings
						</button>
					</Link>
					<Link href="/livelocation">
						<button
							id="buttonwidth"
							type="button"
							className="btn btn-primary btn_flex btn_radius_0"
						>
							{" "}
							<i className="fa fa-map-marker" aria-hidden="true"></i>
							Live GPS
						</button>
					</Link>
					<Link href="/liveview">
						<button
							id="buttonwidth"
							type="button"
							className="btn btn-primary btn_flex btn_radius_0"
						>
							{" "}
							<i className="fa fa-television" aria-hidden="true"></i>
							Live View
						</button>
					</Link>
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

					<Recordings />
				</div>
			</div>
	
		</>
	);
}
