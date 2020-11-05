import React from "react";
import Notifications from "../components/Notifications";
import Recordings from "../components/recordings";
import Vehicles from "../components/Vehicles";
import Sidebar from "../components/sideBar";

export default function home() {
	return (
		<>
			{/* // <div>
		// 	<Notifications show={3} />
		// 	<Vehicles show={1} />
		// 	<Recordings show={2} />
		// </div> */}

			<Sidebar />

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
		</>
	);
}
