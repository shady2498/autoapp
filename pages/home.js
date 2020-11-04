import React from "react";
import Notifications from "../components/Notifications";
import Recordings from "../components/recordings";
import Vehicles from "../components/Vehicles";

export default function home() {
	return (
		<div>
			<Notifications show={3} />
			<Vehicles show={1} />
			<Recordings show={2} />
		</div>
	);
}
