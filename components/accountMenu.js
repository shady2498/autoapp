import React, { useState } from "react";
import Link from "next/link";
import changeName from "../components/changeName";

export default function accountMenu() {
	const [menu, setMenuOpen] = useState(<changeName />);
	const [menut, setMenu] = useState({});

	const toggleMenu = (item, open) => (event) => {
		setMenuOpen({ ...menu, [item.value]: open });
	};

	const menukk = [
		{
			key: "Home",
			value: "/home",
			icon: "LanguageIcon",
		},
		{
			key: "Notifications",
			value: "/notifications",
			icon: "NotificationsIcon",
		},
		{
			key: "View All",
			value: "#",
			icon: "NotificationsIcon",
		},
		{
			key: "Account",
			value: "/account",
			icon: "NotificationsIcon",
		},
		{
			key: "Notifications",
			value: "/notifications",
			icon: "NotificationsIcon",
		},
	];
	return (
		<>
			<div className="col-3 accountcard  shadow p-3 mb-6 bg-white rounded">
				<img src="..\img\images.png" className="avatar" />
				<br />
				<strong className="Nameprofile"> Tomas Wilson </strong>
				<br />
				<text className="profileemail"> luckytom@rach </text>
				<br />
				<text>Name</text>
				<br />
				<h4>Tomas Wilson </h4>
				<hr className="new5" />
				<text>Email Address</text>
				<br />
				<h4>luckytom@rach</h4>
				<hr className="new5" />
				<h4>Change Password</h4>
				<hr className="new5" />
				<h4>PIN Code</h4>
				<hr className="new5" />
				<h4>Change PIN Code</h4>
				<hr className="new5" />
				<h4>Support</h4>
				<hr className="new5" />
				<h4>Logout</h4>
				<hr className="new5" />
				sdsd
				<button onClick={setMenu}></button>
				{menukk.map((item, index) => (
					<>
						<h1>dsadasd</h1>
						<button
							key={index}
							className="btn btn-primary"
							onClick={toggleMenu(item, true)}
						>
							{item.key}
						</button>
					</>
				))}
			</div>
		</>
	);
}
