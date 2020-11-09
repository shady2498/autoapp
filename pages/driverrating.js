import React from "react";
import Driverrating from "../components/driverRating";

export default function driverrating() {
	return (
		<>
			<section role="main" className="content-body">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<section className="panel">
								<header className="panel-heading">
									<div className="panel-actions">
										<a href="#" className="fa fa-caret-down"></a>
										<a href="#" className="fa fa-times"></a>
									</div>
								</header>
								<div className="panel-body">
									<h2 className="panel-title">Driver Rating</h2>
									<p>view list</p>
									<div className="table-responsive">
										<table className="table table-hover mb-none">
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
		</>
	);
}
