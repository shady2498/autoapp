import React, { useState } from "react";
import notificationsdata from "../data/notifications.json";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import TopBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
										<p className="text-left">
											{" "}
											<ErrorIcon className="ErrorIconred" />{" "}
											{notificationsdetail.title}
										</p>{" "}
										<div className="error-crosss">
											<CloseIcon onClick={() => handleDelete(index)} />
										</div>
									</button>
								);
							})
					: notificationsdata.reverse().map((notificationsdetail, index) => {
							return (
								<React.Fragment key={index}>
									<div className="king">
										<div className="widget-summary">
											<div className="widget-summary-col widget-summary-col-icon">
												<div className="summary-icon ">
													<ErrorIcon />
												</div>
											</div>
											<div className="summaryies">
												<h4 className="title">{notificationsdetail.title}</h4>
											</div>
											<div className="summary-footer">
												<a className="text-muted text-uppercase">
													{notificationsdetail.detail}
												</a>
											</div>

											<div className="error-cross">
												<CloseIcon onClick={() => handleDelete(index)} />
											</div>

											{/* <button onClick={() => handleDelete(index)}>adasd</button> */}
										</div>
									</div>
								</React.Fragment>
							);
					  })}
			</div>
		</>
	);
}
