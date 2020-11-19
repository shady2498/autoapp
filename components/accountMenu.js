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
	return <></>;
}
