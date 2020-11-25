import React from "react";
import Notifications from "../components/Notifications";

export default function notifications() {
	return (
		<>
			<div>
				<section role="main" className="content-body">
					<div className="container-fluid">
						<div className="col-md-10 col-sm-6 offset-md-3    ">
							<h2 className="panel-title">Notifications</h2>
							<p>18 sep 20</p>
						</div>
						{/* previous class <div className="col-12 mx-auto btn-group btn-group-justified "> */}
						<div className=" row d-flex justify-content-center  ">
							<a
								className="btn btn-primary col-md-3 btn-setting col-sm-12  "
								role="button"
							>
								Current&nbsp;Notifications
							</a>

							<a
								className="btn btn-primary btn-setting col-md-3 	col-sm-12"
								role="button"
							>
								Active&nbsp;Notifications
							</a>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-md-12  change">
								<section className="paneling panel-featured-left panel-featured-secondary">
									<div className="panel-body redclr">
										<Notifications show="all" />
									</div>

									{/* <div className="panel-body redclr">
										<div className="widget-summary">
											<div className="widget-summary-col widget-summary-col-icon">
												<div className="summary-icon ">
													<ErrorIcon />
												</div>
											</div>
											<div className="widget-summary-col">
												<div className="summary">
													<h4 className="title">Total Profit</h4>
												</div>
												<div className="summary-footer">
													<a className="text-muted text-uppercase">
														(withdraw all)
													</a>
												</div>
												<div className="error-cross">
													<CloseIcon />
												</div>
											</div>
										</div>
									</div> */}
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
