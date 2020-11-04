import React from "react";
import Liveview from "../components/liveView";
import Link from "next/link";

export default function liveview() {
	return (
		<>
			<div>
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
				<Liveview />
			</div>
		</>
	);
}
