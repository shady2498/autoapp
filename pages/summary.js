import React from "react";
import Link from "next/link";
import DriverRating from "../components/driverRating";
import Notifications from "../components/notifications";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";
const summary = () => {
	return (
		<>
			<section role="main" className="content-body">
				<SideBar />
				<TopBar />
				<div className="row">
					<div className="col-8 mt-5">
						<section classNameName="map_sect_one">
							<div classNameName="maparea">
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

						<section classNameName="map_sect_one mt-5">
							<div classNameName="maparea">
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
					<div className="col-4 mt-5">
						<section className="panel panel-featured-left panel-featured-primary">
							<div className="panel-body">
								<div className="widget-summary">
									<div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											<i className="fa fa-life-ring"></i>
										</div>
									</div>
									<div className="widget-summary-col">
										<div className="summary">
											<h4 className="title">Support Questions</h4>
											<div className="info">
												<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span>
											</div>
										</div>
										<div className="summary-footer">
											<a className="text-muted text-uppercase">(view all)</a>
										</div>
									</div>
								</div>
							</div>

							<div className="panel-body">
								<div className="widget-summary">
									<div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											<i className="fa fa-life-ring"></i>
										</div>
									</div>
									<div className="widget-summary-col">
										<div className="summary">
											<h4 className="title">Support Questions</h4>
											<div className="info">
												<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span>
											</div>
										</div>
										<div className="summary-footer">
											<a className="text-muted text-uppercase">(view all)</a>
										</div>
									</div>
								</div>
							</div>

							<div className="panel-body">
								<div className="widget-summary">
									<div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											<i className="fa fa-life-ring"></i>
										</div>
									</div>
									<div className="widget-summary-col">
										<div className="summary">
											<h4 className="title">Support Questions</h4>
											<div className="info">
												<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span>
											</div>
										</div>
										<div className="summary-footer">
											<a className="text-muted text-uppercase">(view all)</a>
										</div>
									</div>
								</div>
							</div>

							<div className="panel-body">
								<div className="widget-summary">
									<div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											<i className="fa fa-life-ring"></i>
										</div>
									</div>
									<div className="widget-summary-col">
										<div className="summary">
											<h4 className="title">Support Questions</h4>
											<div className="info">
												<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span>
											</div>
										</div>
										<div className="summary-footer">
											<a className="text-muted text-uppercase">(view all)</a>
										</div>
									</div>
								</div>
							</div>

							<div className="panel-body">
								<div className="widget-summary">
									<div className="widget-summary-col widget-summary-col-icon">
										<div className="summary-icon bg-primary">
											<i className="fa fa-life-ring"></i>
										</div>
									</div>
									<div className="widget-summary-col">
										<div className="summary">
											<h4 className="title">Support Questions</h4>
											<div className="info">
												<strong className="amount">1281</strong>
												<span className="text-primary">(14 unread)</span>
											</div>
										</div>
										<div className="summary-footer">
											<a className="text-muted text-uppercase">(view all)</a>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className="row show-grid">
					<div className="col-md-6">
						<section className="panel">
							<header className="panel-heading">
								<div className="panel-actions">
									<a href="#" className="fa fa-caret-down"></a>
									<a href="#" className="fa fa-times"></a>
								</div>
							</header>
							<div className="panel-body">
								<h2 className="panel-title">Desktop Notifications</h2>
								<Notifications show="3" />
							</div>
						</section>
					</div>
					<div className="col-md-6">
						<section className="panel">
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
											<DriverRating show={4} />
										</tbody>
									</table>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</>
	);
};
export default summary;
