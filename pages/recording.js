import React from "react";
import Recordings from "../components/recordings";
import TopMenuBar from "../components/topMenuBar";
import SideBar from "../components/sideBar";

export default function recording() {
	return (
		<>
			<SideBar />

			<TopMenuBar />
			<div>
				<h1>Recordings </h1>
				<text>here is something information you must know</text>
				<div className="row">
					<input
						type="search"
						className="form-control rec_search fa-search"
						placeholder="Search for video "
						aria-autocomplete="list"
						aria-expanded="false"
					/>
					<button type="button" className="btn btn-primary btn-radius_30">
						Search
					</button>
					<button type="button" className="btn btn-light btn-radius_30">
						Cancel
					</button>
				</div>

				<Recordings />
			</div>
		</>
	);
}
