// use install after adding react-player package using yarn
//plays online youtube videos
//plays video from local storage as well
import React, { useState } from "react";
import ReactPlayer from "react-player";
import recordings from "../data/recordings.json";

export default function Recordings(props) {
	return (
		<div>
			<h1>Recordings</h1>s
			{props.show !== undefined && props.show !== "all"
				? recordings
						.slice(recordings.length - props.show, recordings.length)
						.reverse()
						.map((recordings, index) => {
							return (
								<div className="col mb-4">
									<div className="card h-100">
										<ReactPlayer
											className="col coloumn-setting"
											controls={true}
											loading="lazy"
											key={index}
											url={recordings.video}
											width="333px !important"
											height="191px !important"
										/>
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<p className="card-text">This is a short card.</p>
										</div>
									</div>
								</div>
							);
						})
				: recordings.reverse().map((recordings, index) => {
						return (
							<div className="col mb-4">
								<div className="card h-100">
									<ReactPlayer
										className="card-img-top"
										controls={true}
										loading="lazy"
										key={index}
										url={recordings.video}
									/>
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">This is a short card.</p>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}
