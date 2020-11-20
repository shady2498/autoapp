import React, { useState } from "react";
import ChangeName from "../components/changeName";
import ChangePassword from "../components/changePassword";
import ChangePin from "../components/changePin";
import AddDevice from "../components/addNewDevice";

export default function account() {
	const [menu, setMenu] = useState({
		changeName: false,
		changePassword: false,
		changePin: false,
		addDevice: false,
	});

	const toggleMenu = (item, open) => {
		// console.log(open);
		if (item.value == "changeName") {
			// console.log(item.value);
			// console.log("king");
			setMenu({
				...menu,
				changeName: open,
				changePassword: false,
				changePin: false,
				addDevice: false,
			});
			// setMenu((prevState) => {...menu});
			console.log(menu);
		} else if (item.value == "changePassword") {
			// console.log(item.value);
			// console.log("king");
			setMenu({
				...menu,
				changeName: false,
				changePassword: open,
				changePin: false,
				addDevice: false,
			});
			// setMenu((prevState) => {...menu});
			console.log(menu);
		} else if (item.value == "changePin") {
			// console.log(item.value);
			// console.log("king");
			setMenu({
				...menu,
				changeName: false,
				changePassword: false,
				changePin: open,
				addDevice: false,
			});
			// setMenu((prevState) => {...menu});
			console.log(menu);
		} else if (item.value == "addDevice") {
			// console.log(item.value);
			// console.log("king");
			setMenu({
				...menu,
				changeName: false,
				changePassword: false,
				changePin: false,
				addDevice: open,
			});
			// setMenu((prevState) => {...menu});
			console.log(menu);
		} else {
			console.log("nothign");
		}
	};
	const menukk = [
		{
			key: "name",
			value: "changeName",
			icon: "LanguageIcon",
		},
		{
			key: "password",
			value: "changePassword",
			icon: "NotificationsIcon",
		},
		{
			key: "changePin",
			value: "changePin",
			icon: "NotificationsIcon",
		},
		{
			key: "addDevice",
			value: "addDevice",
			icon: "NotificationsIcon",
		},
	];
	return (
		<>
			<div className="profilebodycolour">
				<h1 className="profiletital">Account</h1>
				<text>Here is something information that you must to know.</text>
				<div className="row">
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
						{menukk.map((item, index) => (
							<>
								<button
									key={index}
									className="btn btn-primary"
									onClick={() => toggleMenu(item, true)}
								>
									{item.key}
								</button>
							</>
						))}
					</div>
				</div>
			</div>

			{(() => {
				if (menu.changeName == true) {
					return <ChangeName />;
				} else if (menu.changePin == true) {
					return <ChangePin />;
				} else if (menu.changePassword == true) {
					return <ChangePassword />;
				} else if (menu.addDevice == true) {
					return <AddDevice />;
				} else {
					return null;
				}
			})()}
		</>
	);
}
