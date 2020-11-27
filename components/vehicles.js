import React from "react";
import vehicles from "../data/vehicles.json";

export default function Vehicles(props) {
	return (
		<div>
			{props.show !== undefined && props.show !== "all"
				? vehicles
						.slice(vehicles.length - props.show, vehicles.length)
						.reverse()
						.map((vehicles, index) => {
							return (
								<header className="panel-heading bg-color mt-5" key={index}>
									<div className="actvitybox">
										<div className="media">
											<div className="widget-profile-info">
												<div className="profile-picture">
													<span className="blue-line"></span>
													<img
														id="avatar1"
														src="..\img\images.png"
														className="mr-3 mt-3 rounded-circle"
														style={{ width: 60 }}
													/>
												</div>
												<div className="media-body">
													<h4>
														<strong key={index}> {vehicles.CarOwner}</strong>
													</h4>
													<p>
														current speed:
														<strong key={index}>{vehicles.currentSpeed}</strong>
													</p>
													<p>
														current Elevation:
														<strong key={index}>
															{vehicles.currentElevation}
														</strong>
													</p>
												</div>
											</div>
										</div>
									</div>
								</header>
							);
						})
				: vehicles.reverse().map((vehicles, index) => {
						return <h1 key={index}>{vehicles.id}</h1>;
				  })}
		</div>
	);
}
