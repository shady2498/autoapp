import React from "react";
import LiveLocation from "../components/liveLocation";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";

export default function livelocation() {
	return (
		<>
			<div>
				<TopBar />
			{/* 	<SideBar /> */}

				<LiveLocation />
			</div>
		</>
	);
}
