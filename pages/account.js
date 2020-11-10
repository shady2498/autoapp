import React from "react";
import AccountMenu from "../components/accountMenu";

export default function account() {
	return (
		<>
			<div className="profilebodycolour">
				<h1 className="profiletital">Account</h1>
				<text>Here is something information that you must to know.</text>
				<div className="row">
					<AccountMenu />
					<div className="col-6  accountprofile   shadow p-3 mb-6 bg-white rounded">
						<h1>Change name</h1>

						<div className="profilename">
							<text>Name</text>
							<h1>Tomas Wilson</h1>
							<hr className="new5  hrheights" />
						</div>

						<button className="mt-sm mb-sm btn btn-Primay">Save</button>
					</div>
				</div>
			</div>
		</>
	);
}
