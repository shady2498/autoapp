import React, { useState } from "react";
import AccountMenu from "../components/accountMenu";
import ChangeName from "../components/changeName";

export default function account() {
	const handleClick = (input) => {
		// console.log(input);
		if (input === "changeName") {
			// setMenu({...menu, });
			console.log(input);
			setMenu((changeName = true));
		}
	};

	const [menu, setMenu] = useState({
		changeName: false,
		changePassword: false,
		changePin: false,
		addDevice: false,
	});
	return (
		<>
			<div className="profilebodycolour">
				<h1 className="profiletital">Account</h1>
				<text>Here is something information that you must to know.</text>
				<div className="row">
					<div className="col-3 accountcard  shadow p-3 mb-6 bg-white rounded">
						<img src="..\img\images.png" className="avatar" />
						<br />
						<strong className="Nameprofile"> Tomas Wilson </strong>
						<br />
						<text className="profileemail"> luckytom@rach </text>
						<br />
						<text>Name</text>
						<br />
						<h4>Tomas Wilson </h4>
						<hr className="new5" />
						<text>Email Address</text>
						<br />
						<h4>luckytom@rach</h4>
						<hr className="new5" />
						<h4>Change Password</h4>
						<div>
							<button
								className="btn btn-primary"
								onClick={() => handleClick("changeName")}
							>
								<p>changeName</p>
							</button>
						</div>

						<hr className="new5" />
						<h4>PIN Code</h4>
						<hr className="new5" />
						<h4>Change PIN Code</h4>
						<hr className="new5" />
						<h4>Support</h4>
						<hr className="new5" />
						<h4>Logout</h4>
						<hr className="new5" />
					</div>
				</div>
			</div>
		</>
	);
}
