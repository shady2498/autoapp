import React from "react";
import vehicles from "../data/vehicles.json";

export default function Vehicles(props) {
	return (
		<div>
			<h1>Vehicles</h1>
			{props.show !== undefined && props.show !== "all"
				? vehicles
						.slice(vehicles.length - props.show, vehicles.length)
						.reverse()
						.map((vehicles, index) => {
							return (
								<div className="actvitybox">
									<div className="media">
										<img
											id="avatar1"
											src={vehicles.image}
											className="mr-3 mt-3 rounded-circle"
											style={{ width: 60 }}
										/>
										<div className="media-body">
											<h4>
												<strong key={index}> {vehicles.CarOwner}</strong>
											</h4>
											<text>
												current speed:
												<strong key={index}>{vehicles.currentSpeed}</strong>
											</text>
											<text>
												current Elevation:
												<strong key={index}>{vehicles.currentElevation}</strong>
											</text>
										</div>
									</div>
								</div>
							);
						})
				: vehicles.reverse().map((vehicles, index) => {
						return <h1 key={index}>{vehicles.id}</h1>;
				  })}
		</div>
	);
}
