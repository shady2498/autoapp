import React, { useState } from "react";
import notificationsdata from "../data/notifications.json";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";

export default function Notifications(props) {
	const [show, setShow] = useState(notificationsdata);
	// const [notificationArray]

	const handleDelete = (notificationsdataId) => {
		const items = notificationsdata.splice(notificationsdataId, 1);
		setShow({ notificationsdata: items });
	};
	return (
		<>
			<div>
				{/* <h1>Notifications</h1> */}
				{/* {notifications.map((notificationsdetail, index) => {
				console.log(index);
				if (props.show && index < props.show) {
					return <h1 key={index}>{notificationsdetail.title}</h1>;
				} else if (props.show && props.show == "all") {
					return <h1 key={index}>{notificationsdetail.title}</h1>;
				}
			})} */}

				{props.show !== undefined && props.show !== "all"
					? notificationsdata
							.slice(
								notificationsdata.length - props.show,
								notificationsdata.length
							)
							.reverse()
							.map((notificationsdetail, index) => {
								return (
									<button
										key={index}
										id="desktop-notice"
										className="mt-sm mb-sm btn btn-info"
									>
									
										<p 
										
										 className="text-left"> <ErrorIcon class="ErrorIconred"/> {notificationsdetail.title}</p>{" "}
										
										<div className="error-crosss">
											<CloseIcon onClick={() => handleDelete(index)} />
										</div>
									</button>
								);
							})
					: notificationsdata.reverse().map((notificationsdetail, index) => {
							return (
								<>
									<div key={index}>
										<div className="widget-summary-col widget-summary-col-icon">
											<div class="summary-icon ">
												<ErrorIcon />
											</div>
										</div>
										<div class="summaryies">
											<h4 class="title">{notificationsdetail.title}</h4>
										</div>
										<div class="summary-footer">
											<a class="text-muted text-uppercase">
												{notificationsdetail.detail}
											</a>
										</div>
										<div className="error-cross">
											<CloseIcon onClick={() => handleDelete(index)} />
										</div>
										{/* <button onClick={() => handleDelete(index)}>adasd</button> */}
									</div>
								</>
							);
					  })}
			</div>
		</>
	);
}
