import React from "react";
import Link from "next/link";

//for the navigation on homepage
export default function topMenuBar() {
	return (
		<>
			<div className="row">
				<Link href="/summary">
					<button
						id="buttonwidth"
						type="button"
						className="btn btn-primary btn_flex btn_radius_0"
					>
						<i className="fa fa-pie-chart" aria-hidden="true"></i>
						Summary
					</button>
				</Link>
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
		</>
	);
}
