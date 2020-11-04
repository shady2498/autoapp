import React from "react";
import Notifications from "../components/Notifications";
import Recordings from "../components/recordings";
import Vehicles from "../components/Vehicles";

export default function home() {
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
			{/* // <div>
		// 	<Notifications show={3} />
		// 	<Vehicles show={1} />
		// 	<Recordings show={2} />
		// </div> */}
			{/* 
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
				<a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
					×
				</a>
				<div className="nav1">
					<a id="atag" onClick={openNav2} href="#">
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
			</div> */}

			<div id="main">
				<button className="openbtn" onClick={openNav}>
					☰ Open Sidebar
				</button>
				{/* <div id="closesidebar">
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
				</div> */}

				<section className="map_sect_one">
					<div className="maparea">
						<iframe
							width="100%"
							height="350"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
					</div>
				</section>
				<section className="Notiy_sect_one">
					<div className="notyfiy_box">
						<div className="row">
							<div className="col-lg-7 col-md-7">
								<div className="card card-elegant">
									<div className="card-block">
										<h5 className="card-title text-uppercase">
											<small className="noti"> Notifications</small>
										</h5>
										<text className="sep">18 September 2020</text>
									</div>
									<div className="activy_boxes">
										<Notifications show="2" />
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-md-5">
								<div className="card card-elegant">
									<div className="card-block">
										<h5 className="card-title text-uppercase"> Your Vehicle</h5>
									</div>
									<div className="activy_boxes">
										<Vehicles show={2} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="picture1">
					<h1> Recent Recordings </h1>
					<span style={{ float: "right", color: "#0091ff" }}>See All</span>
					<div col-md-12>
						<Recordings show="4" />
					</div>
				</section>
			</div>
		</>
	);
}
