import React from "react";
import notifications from "../data/notifications.json";

export default function Notifications(props) {
	return (
		<div>
			<h1>Notifications</h1>
			{/* {notifications.map((notificationsdetail, index) => {
				console.log(index);
				if (props.show && index < props.show) {
					return <h1 key={index}>{notificationsdetail.title}</h1>;
				} else if (props.show && props.show == "all") {
					return <h1 key={index}>{notificationsdetail.title}</h1>;
				}
			})} */}

			{props.show !== undefined && props.show !== "all"
				? notifications
						.slice(notifications.length - props.show, notifications.length)
						.reverse()
						.map((notificationsdetail, index) => {
							return (
								<div className="actvitybox">
									<div className="media">
										<div className="media-body">
											<h4>
												<strong>
													<i
														className="fa fa-info-circle"
														aria-hidden="true"
													></i>
													<p key={index}>{notificationsdetail.title}</p>
													<span className="x"> X </span>{" "}
												</strong>{" "}
											</h4>
											<text key={index}>{notificationsdetail.detail}</text>
										</div>
									</div>
								</div>
							);
						})
				: notifications.reverse().map((notificationsdetail, index) => {
						return (
							<div className="actvitybox">
								<div className="media">
									<div className="media-body">
										<h4>
											<strong>
												<i className="fa fa-info-circle" aria-hidden="true"></i>
												<p key={index}>{notificationsdetail.title}</p>
												<span className="x"> X </span>{" "}
											</strong>{" "}
										</h4>
										<text key={index}>{notificationsdetail.detail}</text>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}
