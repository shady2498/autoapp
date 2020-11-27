import React from "react";
import SideBar from "../components/sideBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TopBar from "../components/topMenuBar";



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

export default function NoNotications() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<>
		<div className={classes.root}>
				<SideBar />
				<main className={classes.content}>
					<div className={classes.toolbar} />
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
			</main>
			</div>
		</>
	);
}
