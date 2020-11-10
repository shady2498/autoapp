import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Link from "next/link";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import vehiclesData from "../data/vehicles.json";

const drawerWidth = 240;
const anchor = "left";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},

	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
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
	nested: {
		paddingLeft: theme.spacing(4),
	},

	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
}));

export default function sideBar() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const menu = [
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

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{vehiclesData.map((vehiclesdata, index) => (
					<ListItem button key={vehiclesdata.id}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
						</ListItemIcon>
						<ListItemText primary={vehiclesdata.CarOwner} />
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	return (
		<>
			<div className={classes.root}>
				<CssBaseline />

				<Drawer
					variant="permanent"
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						}),
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.toolbar}>
						{open ? (
							<IconButton onClick={handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						) : null}
					</div>
					<Divider />
					<List>
						{menu.map((item, index) => (
							<Link href={item.value}>
								<ListItem button key={item.key}>
									<ListItemIcon>{<item.icon />}home</ListItemIcon>
									<p>{item.key}</p>
								</ListItem>
							</Link>
						))}
					</List>
					<Divider />
					<List
						component="nav"
						aria-labelledby="nested-list-subheader"
						subheader={
							<ListSubheader component="div" id="nested-list-subheader">
								Nested List Items
							</ListSubheader>
						}
						// className={classes.root}
					>
						<ListItem button>
							<ListItemIcon>
								<SendIcon />
							</ListItemIcon>
							<ListItemText primary="Sent mail" />
							<React.Fragment key={anchor}>
								<button onClick={toggleDrawer(anchor, true)}>{anchor}</button>
								<Drawer
									anchor={anchor}
									open={state[anchor]}
									onClose={toggleDrawer(anchor, false)}
								>
									{list(anchor)}
								</Drawer>
							</React.Fragment>
						</ListItem>
						<ListItem button>
							<ListItemIcon>some </ListItemIcon>
							<ListItemText primary="Drafts" />
						</ListItem>
					</List>
				</Drawer>
			</div>
		</>
	);
}
