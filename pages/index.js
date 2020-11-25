import NewSideBaring from "../components/sideBar";
import SideBar from "../components/sideBar";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: "flex",
// 	},
// 	toolbaring: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "flex-end",
// 		padding: theme.spacing(0, 1),
// 		// necessary for content to be below app bar
// 		...theme.mixins.toolbar,
// 	},
// 	content: {
// 		flexGrow: 1,
// 		padding: theme.spacing(3),
// 	},
// }));

export default function Home() {
	// const classesing = useStyles();
	return (
		<SideBar />
		// <>
		// 	<div className={classesing.root}>
		// 		<NewSideBaring />
		// 		<main className={classesing.content}>
		// 			<div className={classesing.toolbaring} />
		// 			<p>
		// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		// 				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
		// 				dolor purus non enim praesent elementum facilisis leo vel. Risus at
		// 				ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
		// 				rutrum quisque non tellus. Convallis convallis tellus id interdum
		// 				velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
		// 				sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
		// 				integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
		// 				eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
		// 				quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
		// 				vivamus at augue. At augue eget arcu dictum varius duis at
		// 				consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
		// 				donec massa sapien faucibus et molestie ac.
		// 			</p>
		// 		</main>
		// 	</div>
		// </>
	);
}
