import React from "react";
import vehiclesData from "../data/vehicles.json";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import LanguageIcon from '@material-ui/icons/Language';




const drawerWidth = 378;
const anchor = "left";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
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

	paper: {
		overflowY: "unset",
		left: "10%",
	},
}));

export default function sideBar() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

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
				<div className="selectvehicle">Select vehicle</div>
				{vehiclesData.map((vehiclesdata, index) => (
					<ListItem button key={vehiclesdata.id}>
						{/* <ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
						</ListItemIcon> */}
						<ListItemText primary={vehiclesdata.CarOwner} />
					</ListItem>
				))}{" "}
			</List>
			<Divider />
		</div>
	);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<div
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
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
					<ArrowRightIcon className="Arrowsidebar" />
				</IconButton>
			</div>
			<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ArrowLeftIcon className="arrowleft21" />
						)}
					</IconButton>
				</div>
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
			

				<div className="row">
				<Avatar alt="Remy Sharp" src="..\img\images.png"></Avatar>
					<h1 className="h1name">TOMAS WIlSON</h1>
					<text className="emailtext">Luckytom@rach</text>
				</div>

				<Divider />
				<List>
				
				<li className="liindrawer"> <LanguageIcon className="icone_size"/> <span className="icontextsidebar">Home</span></li>
				<li className="liindrawer" > <NotificationsIcon className="icone_size" /> <span className="icontextsidebar">Notifications </span>  </li>
				<li className="liindrawer" > <AppsIcon className="icone_size" /> <span className="icontextsidebar"> View All </span> </li>
				<li className="liindrawer" > <AccountCircleIcon className="icone_size" /><span className="icontextsidebar"> </span> Account </li>
                <li className="liindrawer" > <LiveTvIcon className="icone_size"  /><span className="icontextsidebar"> Add new device </span> </li>
					
					</List>


				<ListItem button>
					<React.Fragment key={anchor}>
						<a onClick={toggleDrawer(anchor, true)}>
							{" "}
							<ArrowRightIcon />{" "}
						</a>
						<Drawer
							classes={{
								paper: classes.paper,
							}}
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</React.Fragment>
				</ListItem>
				<ListItem button></ListItem>
				<Divider />
			</Drawer>
		</div>
	);
}
