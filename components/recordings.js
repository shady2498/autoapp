// use install after adding react-player package using yarn
//plays online youtube videos
//plays video from local storage as well
import React, { useState } from "react";
import ReactPlayer from "react-player";
import recordings from "../data/recordings.json";

export default function Recordings(props) {
	return (
		<div>
			{/* <h1>Recordings</h1> */}
			{/* for local storage 
			<ReactPlayer url="videos/warriors.mp4" controls={true} />
			<ReactPlayer url="videos/warriors.mp4" controls={true} />
			<ReactPlayer url="videos/warriors.mp4" controls={true} />
			<ReactPlayer url="videos/warriors.mp4" controls={true} /> */}
			{/* for online video */}
			{/* <ReactPlayer url={recordings[0].video} /> */}
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

// const YOUTUBE_PLAYLIST_ITEMS =
// 	"https://www.googleapis.com/youtube/v3/playlistItems";

// // export async function getServerSideProps() {
// // 	const res = await fetch(
// // 		`${YOUTUBE_PLAYLIST_ITEMS}?part=snippet&playlistId=PLMFGVXWuJ1C5ls-U4_c0Je5kvCCvIrR5K&maxResults=50key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
// // 	);

// // 	const data = await res.json();
// // 	console.log(data);

// // 	return {
// // 		props: {
// // 			data,
// // 		},
// // 	};
// // }

// export default async function Recordings(props) {
// 	const res = await fetch(
// 		`${YOUTUBE_PLAYLIST_ITEMS}?part=snippet&playlistId=PLMFGVXWuJ1C5ls-U4_c0Je5kvCCvIrR5K&maxResults=50key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
// 	);

// 	const data = await res.json();
// 	console.log(data);
// 	console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
// 	console.log(props);
// 	return <h1>sds</h1>;
// }
