import React from "react";
import Link from "next/link";
import SignIn from "../components/signIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCar, } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 



export default function signIn() {
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
						<h1 className="h2mainstyle"> Auto Camera App </h1>
					</div>
					<div className="form_style">
						{/* <span style={{color: "black",textAlign:"center"}}>or login with </span> */}
						<SignIn />

						<br />

						<br />

						{/* <div className="needaccount">
							<span>Need an account?</span>
							<Link href="/signUp">Sign In</Link>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}
