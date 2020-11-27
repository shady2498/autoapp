import React from "react";
import driverrating from "../data/driverrating.json";
export default function driverRating(props) {
	return (
		<tbody>
			<div>
				<div>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Last Driven</th>
							<th>Drive Score</th>
						</tr>
					</thead>
					{props.show !== undefined && props.show !== "all"
						? driverrating
								.slice(driverrating.length - props.show, driverrating.length)
								.reverse()
								.map((driverrating, index) => {
									return (
										<React.Fragment key={index}>
											<tr>
												<td key={index}>{driverrating.id}</td>
												<td key={index}>{driverrating.name}</td>
												<td key={index}>{driverrating.lastDriven}</td>
												<td key={index}>{driverrating.drivescore}</td>
											</tr>
										</React.Fragment>
									);
								})
						: driverrating.reverse().map((driverrating, index) => {
								return <h1 key={index}>{driverrating.id}</h1>;
						  })}
				</div>
			</div>
		</tbody>
	);
}
