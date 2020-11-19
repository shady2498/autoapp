// use install after adding react-player package using yarn
//plays online youtube videos
//plays video from local storage as well
import React, { useState } from "react";
import ReactPlayer from "react-player";
import recordings from "../data/recordings.json";
import MissedVideoCallIcon from '@material-ui/icons/MissedVideoCall';

export default function Recordings(props) {
	return (
		<div>
		<h1>Recordings</h1>
		{props.show !== undefined && props.show !== "all"
			? recordings
					.slice(recordings.length - props.show, recordings.length)
					.reverse()
					.map((recordings, index) => {
						return (
							<div className="col-md-3 col-sm-6  mb-4">
								<div className="card h-1000">
									<ReactPlayer
										className="col coloumn-setting"
										controls={true}
										loading="lazy"
										key={index}
										url={recordings.video}
										width="100px !important"
										height="194px !important"
									/>
								</div>
							</div>
						);
					})
			: recordings.reverse().map((recordings, index) => {
					return (
						<div className="col-md-3 mb-4">
							<div className="card h-100">
								<ReactPlayer
									className="card-img-top"
									controls={true}
									loading="lazy"
									key={index}
									url={recordings.video}
								/>
								<div className="card-body">
									<h5 className="card-title carddate">Sept 20,2020,08:03PM</h5>
									<text className="textcard">Sept 18,2020,03:57</text> <span className="ytp-overflow-icon" ></span>
									<h3 className="h3recording"> <MissedVideoCallIcon className="videoicone"/> User Recording</h3>
									<p className="card-text cardtextrecording">Private  0 MPH 1019.11MB </p>
									<text className="textrecording">Uploaded from Zoe's Car Invalod date ago</text>
								</div>
							</div>
						</div>
					);
			  })}
	</div>
	);
}
