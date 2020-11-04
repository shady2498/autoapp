import React from "react";
import Signup from "../components/signUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SignUp() {
	return (
		<>
			<div className="row">
				<div className="col-md-6  login-bg-img">
					<img className="img_size" src="./img/wifi.png" />

					<div id="main_text">
						<h1 className="h1_hights">Auto Camera App</h1>
						<h3 className="h3_hights"> Everything before your eyes </h3>
						<p className="p_hights3">
							Lorem ipsum dolor sit amet, consectetur and it adipiscing elit,
							sed do eiusmod tem incididunt ut labore et dolore magna enim ad
							minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
							consectetur and it adipiscing elit, sed do eiusmod tem incididunt
							ut labore et dolore magna enim ad minim veniam, quis nostrud.
							Lorem ipsum dolor sit amet, consectetur and it adipiscing elit,
							sed do eiusmod tem incididunt ut labore et dolore magna enim ad
							minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
							consectetur and it adipiscing elit, sed do eiusmod tem incididunt
							ut labore et dolore magna enim ad minim veniam, quis nostrud
						</p>
					</div>
				</div>

				<div className="col-md-6  main_logindiv">
					<div className="row justify-content-center">
						<div>
							<button className="btn">
								<FontAwesomeIcon icon={faHome} />
							</button>
						</div>
						<div>
							<button style={{ backgroundColor: "#1e82d2" }} className="btn">
								<FontAwesomeIcon icon={faCar} />
							</button>
						</div>
					</div>
					<div>
						<h1 className="h1mainstyle"> Sign Up </h1>
					</div>
					<div className="form_style">
						<Signup />
						<br />

						<br />

						<div className="needaccount">
							<span>Need an account?</span>
							<Link href="/signIn">Sign In</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
