import React from "react";
import Notifications from "../components/Notifications";
import Recordings from "../components/recordings";
import Vehicles from "../components/vehicles";
import Sidebar from "../components/sideBar";

export default function home() {
	return (
		<>
			{/* <Sidebar /> */}

			<section className="map_sect_one">
				<div className="maparea">
					<iframe
						width="100%"
						height="350"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
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
									<section className="panel panel-featured-left panel-featured-secondary">
										<div className="panel-body redclr">
											<div className="widget-summary">
												<Notifications show={3} />
											</div>
										</div>
									</section>
								</div>
								{/* <div className="activy_boxes">
									<Notifications show={2} />
								</div> */}
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							{/* <div className="card card-elegant">
								<div className="card-block">
									<h5 className="card-title text-uppercase"> Your Vehicle</h5>
								</div>
								<div className="activy_boxes blue_line">
									<Vehicles show={3} />
								</div>
							</div> */}
							<header className="panel-heading bg-color mt-5">
								<div className="widget-profile-info">
									<div className="profile-picture">
										<span className="blue-line"></span>
										<img src="..\img\images.png"  alt="Avatar" className="avatar" />
									</div>
									<div className="profile-info">
										<h4 className="name text-semibold">John Doe</h4>
										<h5 className="role">Administrator</h5>
										<p className="new data">Some context here</p>
										<div className="profile-footer">
											<a href="#">(edit profile)</a>
										</div>
									</div>
								</div>
							</header>
							<header className="panel-heading bg-color">
								<div className="widget-profile-info">
									<div className="profile-picture">
										<span className="blue-line"></span>
										<img src="..\img\images.png"  alt="Avatar" className="avatar" />
									</div>
									<div className="profile-info">
										<h4 className="name text-semibold">John Doe</h4>
										<h5 className="role">Administrator</h5>
										<p className="new data">Some context here</p>
										<div className="profile-footer">
											<a href="#">(edit profile)</a>
										</div>
									</div>
								</div>
							</header>
						</div>
					</div>
				</div>
			</section>

			<section className="picture1">
				<h1> Recent Recordings </h1>
				<span style={{ float: "right", color: "#0091ff" }}>See All</span>
				<div className="col-md-12">
					<Recordings show={4} />
				</div>
			</section>
		</>
	);
}
