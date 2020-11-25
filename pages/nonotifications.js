import React from "react";
export default function NoNotications() {
	return (
		<>
			<h1 className="H1Nonotification"> Notifications </h1>
			<p className="P-Nonotifications">18 September 2020</p>
			<div className="divNonotifications">
				<img className="imgNonotifications" src="./img/bell-icon.png" />
				<h1 className="newNotifications">You have no new Notifications</h1>
				<p className="pNonotifications">
					{" "}
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been <br /> the industry's standard dummy
					text ever since the 1500s, when an unknown printer took a galley of
					type and scrambled it to make a type specimen book{" "}
				</p>
			</div>
		</>
	);
}
