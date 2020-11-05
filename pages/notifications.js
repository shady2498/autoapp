import React from "react";
import Notifications from "../components/Notifications";
import Sidebar from "../components/sideBar";

export default function notifications() {
	return (
		<>
			<Sidebar />

			<div>
				<div className="container-fluid">
					<div class="col-12 mx-auto btn-group btn-group-justified">
						<a class="btn btn-primary" role="button">
							Left
						</a>
						<a class="btn btn-primary" role="button">
							Middle
						</a>
					</div>
				</div>
				<section role="main" class="content-body">
					<div className="container">
						<div className="row">
							<div class="col-md-12">
								<section class="panel">
									<header class="panel-heading">
										<div class="panel-actions">
											<a href="#" class="fa fa-caret-down"></a>
											<a href="#" class="fa fa-times"></a>
										</div>
									</header>
									<div class="panel-body">
										<h2 class="panel-title">Driver Rating</h2>
										<p>view list</p>
										<div class="table-responsive">
											<table class="table table-hover mb-none">
												<thead>
													<tr>
														<th>#</th>
														<th> Name</th>
														<th>Last Driven</th>
														<th>Drive Score</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Mark</td>
														<td>Otto</td>
														<td>@mdo</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Jacob</td>
														<td>Thornton</td>
														<td>@fat</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>@twitter</td>
													</tr>
												</tbody>
											</table>
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
