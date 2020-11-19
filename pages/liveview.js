import React from "react";
import Liveview from "../components/liveView";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";
export default function liveview() {
	return (
		<>
			<div>
				<TopBar />
				{/* <SideBar /> */} <Liveview />
			</div>
		</>
	);
}
