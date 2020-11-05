import React from 'react'
import Link from "next/link";
const Summary =  () =>{
    return(
<>
<section role="main" class="content-body">
<div className="container">
<div className="row">
					<button
						id="buttonwidth"
						type="button"
						className="btn btn-primary btn_flex btn_radius_0"
					>
						<i className="fa fa-pie-chart" aria-hidden="true"></i>
						Summary
					</button>
					<Link href="/recording">
						<button
							id="buttonwidth"
							type="button"
							className="btn btn-primary btn_flex btn_radius_0"
						>
							{" "}
							<i className="fa fa-video-camera" aria-hidden="true"></i>
							Recordings
						</button>
					</Link>
					<Link href="/livelocation">
						<button
							id="buttonwidth"
							type="button"
							className="btn btn-primary btn_flex btn_radius_0"
						>
							{" "}
							<i className="fa fa-map-marker" aria-hidden="true"></i>
							Live GPS
						</button>
					</Link>
					<Link href="/liveview">
						<button
							id="buttonwidth"
							type="button"
							className="btn btn-primary btn_flex btn_radius_0"
						>
							{" "}
							<i className="fa fa-television" aria-hidden="true"></i>
							Live View
						</button>
					</Link>
				</div>
        
<div class="row">
  <div class="col-8 mt-5">
  <section className="map_sect_one">
					<div className="maparea">
						<iframe
							width="100%"
							height="350"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
					</div>
          </section>

          <section className="map_sect_one mt-5">
					<div className="maparea">
						<iframe
							width="100%"
							height="350"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
					</div>
          </section>

 </div>
  <div class="col-4 mt-5">
  <section class="panel panel-featured-left panel-featured-primary">
<div class="panel-body">
<div class="widget-summary">
<div class="widget-summary-col widget-summary-col-icon">
<div class="summary-icon bg-primary">
<i class="fa fa-life-ring"></i>
</div>
</div>
<div class="widget-summary-col">
<div class="summary">
<h4 class="title">Support Questions</h4>
<div class="info">
<strong class="amount">1281</strong>
<span class="text-primary">(14 unread)</span>
</div>
</div>
<div class="summary-footer">
<a class="text-muted text-uppercase">(view all)</a>
</div>
</div>
</div>
</div>

<div class="panel-body">
<div class="widget-summary">
<div class="widget-summary-col widget-summary-col-icon">
<div class="summary-icon bg-primary">
<i class="fa fa-life-ring"></i>
</div>
</div>
<div class="widget-summary-col">
<div class="summary">
<h4 class="title">Support Questions</h4>
<div class="info">
<strong class="amount">1281</strong>
<span class="text-primary">(14 unread)</span>
</div>
</div>
<div class="summary-footer">
<a class="text-muted text-uppercase">(view all)</a>
</div>
</div>
</div>
</div>

<div class="panel-body">
<div class="widget-summary">
<div class="widget-summary-col widget-summary-col-icon">
<div class="summary-icon bg-primary">
<i class="fa fa-life-ring"></i>
</div>
</div>
<div class="widget-summary-col">
<div class="summary">
<h4 class="title">Support Questions</h4>
<div class="info">
<strong class="amount">1281</strong>
<span class="text-primary">(14 unread)</span>
</div>
</div>
<div class="summary-footer">
<a class="text-muted text-uppercase">(view all)</a>
</div>
</div>
</div>
</div>

<div class="panel-body">
<div class="widget-summary">
<div class="widget-summary-col widget-summary-col-icon">
<div class="summary-icon bg-primary">
<i class="fa fa-life-ring"></i>
</div>
</div>
<div class="widget-summary-col">
<div class="summary">
<h4 class="title">Support Questions</h4>
<div class="info">
<strong class="amount">1281</strong>
<span class="text-primary">(14 unread)</span>
</div>
</div>
<div class="summary-footer">
<a class="text-muted text-uppercase">(view all)</a>
</div>
</div>
</div>
</div>

<div class="panel-body">
<div class="widget-summary">
<div class="widget-summary-col widget-summary-col-icon">
<div class="summary-icon bg-primary">
<i class="fa fa-life-ring"></i>
</div>
</div>
<div class="widget-summary-col">
<div class="summary">
<h4 class="title">Support Questions</h4>
<div class="info">
<strong class="amount">1281</strong>
<span class="text-primary">(14 unread)</span>
</div>
</div>
<div class="summary-footer">
<a class="text-muted text-uppercase">(view all)</a>
</div>
</div>
</div>
</div>
</section>



  </div>

 
</div>
 <div class="row show-grid">
										<div class="col-md-6">
                    <section class="panel">
								<header class="panel-heading">
									<div class="panel-actions">
										<a href="#" class="fa fa-caret-down"></a>
										<a href="#" class="fa fa-times"></a>
									</div>

								
								</header>
								<div class="panel-body">
                <h2 class="panel-title">Desktop Notifications</h2>
									<button id="desktop-notice" class="mt-sm mb-sm btn btn-info">Desktop Notice</button>
									<button id="desktop-notice" class=" mb-sm btn btn-info">Desktop Success</button>
                  <button id="desktop-notice" class=" mb-sm btn btn-info">Desktop Success</button>

								</div>
							</section>
                    </div>
										<div class="col-md-6">
								<section class="panel">
									<header class="panel-heading">
										<div class="panel-actions">
											<a href="#" class="fa fa-caret-down"></a>
											<a href="#" class="fa fa-times"></a>
										</div>
						
									
									</header>
									<div class="panel-body">
                  <h2 class="panel-title">Driver Rating</h2>
										<div class="table-responsive">
											<table class="table table-striped mb-none">
												<thead>
													<tr>
														<th>#</th>
														<th>Name</th>
														<th>Last Driven</th>
														<th>Drive Score</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Mark</td>
														<td>Otto</td>
														<td>3/5</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Jacob</td>
														<td>Thornton</td>
														<td>4/5</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Larry</td>
														<td>the Bird</td>
														<td>3.5/5</td>
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
};
export default Summary;