import React from "react";
import Notifications from "../components/Notifications";

export default function notifications() {
	return (
		<>
			<div>
				<section role="main" class="content-body">
					<div className="container-fluid">
						<div className="col-md-10 col-sm-6 offset-md-3    ">
							<h2 class="panel-title">Notifications</h2>
							<p>18 sep 20</p>
						</div>
						{/* previous class <div class="col-12 mx-auto btn-group btn-group-justified "> */}
						<div class=" row d-flex justify-content-center  ">
							<a class="btn btn-primary col-md-3 btn-setting col-sm-12  " role="button">
								Current&nbsp;Notifications
							</a>
							
							
							<a class="btn btn-primary btn-setting col-md-3 	col-sm-12" role="button">
								Active&nbsp;Notifications
							</a>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div class="col-md-12  change">
								<section class="paneling panel-featured-left panel-featured-secondary">
									<div class="panel-body redclr">
										<div class="widget-summary">
											<Notifications />
										</div>
									</div>

									{/* <div class="panel-body redclr">
										<div class="widget-summary">
											<div class="widget-summary-col widget-summary-col-icon">
												<div class="summary-icon ">
													<ErrorIcon />
												</div>
											</div>
											<div class="widget-summary-col">
												<div class="summary">
													<h4 class="title">Total Profit</h4>
												</div>
												<div class="summary-footer">
													<a class="text-muted text-uppercase">
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
