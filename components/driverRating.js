import React from "react";
import driverrating from "../data/driverrating.json";
export default function driverRating(props) {
	return (
		<div>
			<div>
				<h1>Driver Rating</h1>
				{props.show !== undefined && props.show !== "all"
					? driverrating
							.slice(driverrating.length - props.show, driverrating.length)
							.reverse()
							.map((driverrating, index) => {
								return <h1 key={index}>{driverrating.id}</h1>;
							})
					: driverrating.reverse().map((driverrating, index) => {
							return <h1 key={index}>{driverrating.id}</h1>;
					  })}
			</div>
		</div>
	);
}
