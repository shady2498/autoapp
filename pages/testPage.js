import React, { useState } from "react";
import ChangeName from "../components/changeName";
import ChangePassword from "../components/changePassword";
import ChangePin from "../components/changePin";
import AddDevice from "../components/addNewDevice";

export default function testPage() {
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
			<div>
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
			</div>
		</>
	);
}
