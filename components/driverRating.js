import React from "react";
import driverrating from "../data/driverrating.json";
export default function driverRating(props) {
	return (
		<>
			{props.show !== undefined && props.show !== "all"
				? driverrating
						.slice(driverrating.length - props.show, driverrating.length)
						.reverse()
						.map((driverrating, index) => {
							return (
								<React.Fragment key={index}>
									<tr>
										<td>{driverrating.id}</td>
										<td>{driverrating.name}</td>
										<td>{driverrating.lastDriven}</td>
										<td>{driverrating.drivescore}</td>
									</tr>
								</React.Fragment>
							);
						})
				: driverrating.reverse().map((driverrating, index) => {
						return <h1 key={index}>{driverrating.id}</h1>;
				  })}
		</>
	);
}
