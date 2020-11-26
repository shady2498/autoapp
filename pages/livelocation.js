import React from "react";
import LiveLocation from "../components/liveLocation";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// for pushing the contents to the side

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

export default function livelocation() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<TopBar />
			<div className={classes.root}>
				<SideBar />
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<LiveLocation />
				</main>
			</div>
		</>
	);
}
