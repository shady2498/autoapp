import React from "react";
import Notifications from "../components/Notifications";
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';

export default function notifications() {
	return (
		<>
		<div>
<section role="main" class="content-body">
     
		<div className="container-fluid">
		<div className="col-md-10">
		<h2 class="panel-title">Notifications</h2>
				<p>18 sep 20</p></div>
		<div class="col-12 mx-auto btn-group btn-group-justified">
	
										<a class="btn btn-primary btn-setting" role="button">Current Notifications</a>
										<a class="btn btn-primary btn-setting " role="button">Active Notifications</a>
										</div>
										</div>
			 
<div className="container">
<div className="row">
<div class="col-md-12">
<section class="panel panel-featured-left panel-featured-secondary">
									<div class="panel-body redclr">
										<div class="widget-summary">
											<div class="widget-summary-col widget-summary-col-icon">
												<div class="summary-icon 	">
												<ErrorIcon />
												</div>
											</div>
											<div class="widget-summary-col">
												<div class="summary">
												
													<h4 class="title settings">Total Profit</h4>
													
													{/* <div class="info">
														<strong class="amount">$ 14,890.30</strong>
													</div> */}
												</div>
												<div class="summary-footer">
													<a class="text-muted text-uppercase">(withdraw all)</a>
												</div>
												<div className="error-cross">
												<CloseIcon />
												</div>
												
											</div>
										</div>
									</div>

									<div class="panel-body redclr">
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
													<a class="text-muted text-uppercase">(withdraw all)</a>
												</div>
												<div className="error-cross">
												<CloseIcon />
												</div>
											</div>
										</div>
									</div>

									<div class="panel-body redclr">
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
													<a class="text-muted text-uppercase">(withdraw all)</a>
												</div>
												<div className="error-cross">
												<CloseIcon />
												</div>
											</div>
										</div>
									</div>

									<div class="panel-body redclr">
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
													<a class="text-muted text-uppercase">(withdraw all)</a>
												</div>
												<div className="error-cross">
												<CloseIcon />
												</div>
											</div>
										</div>
									</div>

									<div class="panel-body redclr">
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
													<a class="text-muted text-uppercase">(withdraw all)</a>
												</div>
												<div className="error-cross">
												<CloseIcon />
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
