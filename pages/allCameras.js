import React from "react";
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

export default function allCameras() {
	
	const classes = useStyles();
	const theme = useTheme();

	
	return (
		<>
		<div className={classes.root}>
				<SideBar />
				<main className={classes.content}>
					<div className={classes.toolbar} />
			<h1 className="H1viewall">View All Cameras</h1>
			<p className="Pviewall">
				Here is something information that you must to know.{" "}
			</p>
			<div className="row">
				<div className="col-md-4">
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-md-4">
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-md-4">
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="iframeallCameras"
						src="https://www.youtube.com/embed/bHWgc5MPnPA"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
			</main>
			</div>
		</>
	);
}
