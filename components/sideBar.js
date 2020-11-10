import React from "react";
import Link from "next/link";

export default function sideBar() {
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
				<a href="#" className="closebtn" onClick={closeNav}>
					×
				</a>
				<div className="nav1">
					<Link href="/home">
						<a id="atag" onClick={openNav2}>
							<i className="fa fa-home" aria-hidden="true"></i> HOME
							<i className="fas fa-caret-right"></i>
						</a>
					</Link>
					<Link href="/notifications">
						<a id="atag" href="#">
							<i className="fa fa-bell" aria-hidden="true"></i>Notifications
						</a>
					</Link>
					<Link href="/home">
						<a id="atag" href="#">
							<i className="fa fa-square-o" aria-hidden="true"></i>View All
						</a>
					</Link>
					<Link href="/account">
						<a id="atag" href="#">
							<i className="fa fa-user-o" aria-hidden="true"></i> Account
						</a>
					</Link>
					<Link href="/addnewdevice">
						<a id="atag" href="#">
							<i className="fa fa-desktop" aria-hidden="true"></i>Add new device
						</a>
					</Link>
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
			</div>
		</>
	);
}
