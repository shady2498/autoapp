import React, { useState } from "react";
import ChangeName from "../components/changeName";
import ChangePassword from "../components/changePassword";
import ChangePin from "../components/changePin";
import AddDevice from "../components/addNewDevice";
import AccountLogout from "../components/accountLogout";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));


export default function account() {
	const [menu, setMenu] = useState({
		changeName: false,
		changePassword: false,
		changePin: false,
		addDevice: false,
		accountLogout: false,
	});
	const toggleMenu = (item, open) => {
		if (item.value == "changeName") {
			setMenu({
				...menu,
				changeName: open,
				changePassword: false,
				changePin: false,
				addDevice: false,
				accountLogout: false,
			});
			// console.log(menu);
		} else if (item.value == "changePassword") {
			setMenu({
				...menu,
				changeName: false,
				changePassword: open,
				changePin: false,
				addDevice: false,
				accountLogout: false,
			});
		} else if (item.value == "changePin") {
			setMenu({
				...menu,
				changeName: false,
				changePassword: false,
				changePin: open,
				addDevice: false,
				accountLogout: false,
			});
		} else if (item.value == "addDevice") {
			setMenu({
				...menu,
				changeName: false,
				changePassword: false,
				changePin: false,
				addDevice: open,
				accountLogout: false,
			});
		} else if (item.value == "accountLogout") {
			setMenu({
				...menu,
				changeName: false,
				changePassword: false,
				changePin: false,
				addDevice: false,
				accountLogout: open,
			});
		} else {
			console.log("nothign");
		}
	};
	const menuDisplay = [
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
		{
			key: "accountLogout",
			value: "accountLogout",
			icon: "NotificationsIcon",
		},
	];
	const classes = useStyles();
	const theme = useTheme();
	return (
		<>

<div className={classes.root}>
				<SideBar />
				<main className={classes.content}>
					<div className={classes.toolbar} />
			<div className="profilebodycolour">
				<h1 className="profiletital">Account</h1>
				<text>Here is something information that you must to know.</text>
				<div className="row">
					<div className="col-md-3 accountcard  shadow p-3 mb-6 bg-white rounded">
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
						{/* loops the menu  */}
						{menuDisplay.map((item, index) => (
							<React.Fragment key={index}>
								<button
									className="account-btn"
									onClick={() => toggleMenu(item, true)}
								>
									{item.key}
								</button>
								<hr className="new5" />
							</React.Fragment>
						))}
					</div>
					<div className="col-md-6 col-sm-12  accountprofile   shadow p-3 mb-6 bg-white rounded">
						{(() => {
							if (menu.changeName == true) {
								return <ChangeName />;
							} else if (menu.changePin == true) {
								return <ChangePin set={true} />;
							} else if (menu.changePassword == true) {
								return <ChangePassword />;
							} else if (menu.addDevice == true) {
								return <AddDevice />;
							} else if (menu.accountLogout == true) {
								return <AccountLogout set={true} />;
							} else {
								return null;
							}
						})()}
					</div>
				</div>
			</div>
			</main>
			</div>
		</>
	);
}
