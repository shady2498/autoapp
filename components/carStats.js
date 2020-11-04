//this is for car stats. It will display data of car status at the present time for example speed, internet connection etc

import React from "react";
import carstats from "../data/carstats.json";

export default function CarStats() {
	return (
		<div>
			<h1>Car Status</h1>
			{carstats.map((carstatsdetails, index) => {
				return <h1>{CarStats.title}</h1>;
			})}
		</div>
	);
}
