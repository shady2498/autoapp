import React from "react";
import Link from "next/link";
import DriverRating from "../components/driverRating";
import Notifications from "../components/notifications";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
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

const summary = () => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<>
			<div className={classes.root}>
				<SideBar />
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<section role="main" className="content-body col-sm-12">
						<TopBar />
						<div className="row">
							<div className="col-md-8 col-sm-12  mt-5">
								<section className="map_sect_one">
									<div className="maparea">
										<iframe
											width="100%"
											height="350"
											frameBorder="0"
											scrolling="no"
											marginHeight="0"
											marginWidth="0"
											src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
										></iframe>
									</div>
								</section>

								<section className="map_sect_one mt-5">
									<div className="maparea">
										<iframe
											width="100%"
											height="350"
											frameBorder="0"
											scrolling="no"
											marginHeight="0"
											marginWidth="0"
											src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
										></iframe>
									</div>
								</section>
							</div>
							<div className="col-md-4 col-sm-12  mt-5">
								<section className="panel panel-featured-left panel-featured-primary">
									<div className="panel-body box-size">
										<div className="widget-summary">
											{/* <div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											
										</div>
									</div> */}
											<div className="widget-summary-col">
												<div className="summary icon-set">
													<h4 className="title">Support Questions</h4>
													<br />
													<h5 className="abc">Support Questions</h5>
													{/* 	<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span> */}
													{/* <div className="info">
												
											</div> */}
												</div>
												<div className="summary-footer">
													<a className="text-muted text-uppercase">
														(view all)
													</a>
												</div>
											</div>
										</div>
										{/* <div className="widget-summary-col-icon"> */}
										<div className="summary-icon bg-primary">
											<ErrorIcon />
										</div>
										{/* 	</div> */}
									</div>

									<div className="panel-body box-size">
										<div className="widget-summary">
											{/* <div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											
										</div>
									</div> */}
											<div className="widget-summary-col">
												<div className="summary icon-set">
													<h4 className="title">Support Questions</h4>
													<br />
													<h5 className="abc">Support Questions</h5>
													{/* 	<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span> */}
													{/* <div className="info">
												
											</div> */}
												</div>
												<div className="summary-footer">
													<a className="text-muted text-uppercase">
														(view all)
													</a>
												</div>
											</div>
										</div>
										{/* <div className="widget-summary-col-icon"> */}
										<div className="summary-icon bg-primary">
											<ErrorIcon />
										</div>
										{/* 	</div> */}
									</div>

									<div className="panel-body box-size">
										<div className="widget-summary">
											{/* <div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											
										</div>
									</div> */}
											<div className="widget-summary-col">
												<div className="summary icon-set">
													<h4 className="title">Support Questions</h4>
													<br />
													<h5 className="abc">Support Questions</h5>
													{/* 	<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span> */}
													{/* <div className="info">
												
											</div> */}
												</div>
												<div className="summary-footer">
													<a className="text-muted text-uppercase">
														(view all)
													</a>
												</div>
											</div>
										</div>
										{/* <div className="widget-summary-col-icon"> */}
										<div className="summary-icon bg-primary">
											<ErrorIcon />
										</div>
										{/* 	</div> */}
									</div>

									<div className="panel-body box-size">
										<div className="widget-summary">
											{/* <div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											
										</div>
									</div> */}
											<div className="widget-summary-col">
												<div className="summary icon-set">
													<h4 className="title">Support Questions</h4>
													<br />
													<h5 className="abc">Support Questions</h5>
													{/* 	<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span> */}
													{/* <div className="info">
												
											</div> */}
												</div>
												<div className="summary-footer">
													<a className="text-muted text-uppercase">
														(view all)
													</a>
												</div>
											</div>
										</div>
										{/* <div className="widget-summary-col-icon"> */}
										<div className="summary-icon bg-primary">
											<ErrorIcon />
										</div>
										{/* 	</div> */}
									</div>

									<div className="panel-body box-size">
										<div className="widget-summary">
											{/* <div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											
										</div>
									</div> */}
											<div className="widget-summary-col">
												<div className="summary icon-set">
													<h4 className="title">Support Questions</h4>
													<br />
													<h5 className="abc">Support Questions</h5>
													{/* 	<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span> */}
													{/* <div className="info">
												
											</div> */}
												</div>
												<div className="summary-footer">
													<a className="text-muted text-uppercase">
														(view all)
													</a>
												</div>
											</div>
										</div>
										{/* <div className="widget-summary-col-icon"> */}
										<div className="summary-icon bg-primary">
											<ErrorIcon />
										</div>
										{/* 	</div> */}
									</div>
								</section>
							</div>
						</div>
						<div className="row show-grid">
							<div className="col-md-6  col-sm-12">
								<section className="paneles">
									<header className="panel-heading">
										<div className="panel-actions">
											<a href="#" className="fa fa-caret-down"></a>
											<a href="#" className="fa fa-times"></a>
										</div>
									</header>
									<div className="panel-body">
										<h2 className="panel-title">Desktop Notifications</h2>

										<div className="col-md-12 offset-md-1	">
											<div className="row">
												<button
													type="button"
													className="btn btn-primary btn-radius_31"
												>
													Search
												</button>
												<button
													type="button"
													className="btn btn-light btn-radius_31"
												>
													Cancel
												</button>
											</div>
										</div>
										<section className="panel panel-featured-left panel-featured-secondary">
											<div className="panel-body redclr">
												<div className="widget-summary">
													<Notifications show="all" className="error-cross1" />
												</div>
											</div>
										</section>
									</div>
								</section>
							</div>
							<div className="col-md-6 col-sm-12 ">
								<section className="paneles">
									<header className="panel-heading">
										<div className="panel-actions">
											<a href="#" className="fa fa-caret-down"></a>
											<a href="#" className="fa fa-times"></a>
										</div>
									</header>
									<div className="panel-body">
										<h2 className="panel-title">Driver Rating</h2>
										<div className="table-responsive">
											<table className="table table-striped mb-none">
												<tbody>
													<div>
														<div>
															<thead>
																<tr>
																	<th>#</th>
																	<th>Name</th>
																	<th>Last Driven</th>
																	<th>Drive Score</th>
																</tr>
															</thead>
															<DriverRating show={4} />
														</div>
													</div>
												</tbody>
											</table>
										</div>
									</div>
								</section>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};
export default summary;
