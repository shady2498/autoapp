import React, { useState } from "react";
import ChangeName from "../components/changeName";

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

	const switching = () => {
		console.log("sdsada");

		// switch (menu) {
		// 	case "foo":
		// 		return "bar";
		// 	default:
		// 		return "foo";
		// }
	};

	const open = () => {
		console.log("dsadadas");
	};

	return (
		<>
			<div>
				<button onClick={setMenu}>jjjj</button>
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
				{/* <button onClick={() => open()}>sdasdasdafsdafdfs</button> */}
				{/* {() => switching} */}
				{menu.changeName == true ? <ChangeName /> : null}
				{() => {
					if (changeName == true) {
						<ChangeName />;
					} else if (changePin == true) {
						<ChangePin />;
					} else if (changePassword == true) {
						<ChangePassword />;
					} else if (addDevice == true) {
						<AddDevice />;
					}
				}}
			</div>
		</>
	);
}
