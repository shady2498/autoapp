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
							return <h1 key={index}>{vehicles.id}</h1>;
						})
				: vehicles.reverse().map((vehicles, index) => {
						return <h1 key={index}>{vehicles.id}</h1>;
				  })}
		</div>
	);
}
