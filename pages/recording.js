import React from "react";
import Recordings from "../components/recordings";
import TopMenuBar from "../components/topMenuBar";
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
export default function recording() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<>
			<div className={classes.root}>
			<SideBar />
		  <main className={classes.content}>
			<div className={classes.toolbar} />
			<TopMenuBar />
			<div>
				<h1 className="h1Recording">Recordings </h1>
				<text>here is something information you must know</text>
				<div className="row">
					<input
						type="search"
						className="form-control rec_search fa-search searchinput"
						placeholder="Search for video "
						aria-autocomplete="list"
						aria-expanded="false"
					/>
					<button type="button" className="btn btn-primary btn-radius_30">
						Search
					</button>
					<button type="button" className="btn btn-light btn-radius_30">
						Cancel
					</button>
				</div>
				<Recordings />
			</div>
		</main>
		</div>
	
		</>
	);
}
