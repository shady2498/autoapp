import React from "react";
import SignIn from "../components/signIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCar, fafacebook, } from "@fortawesome/free-solid-svg-icons";


export default function signIn() {
	return (
		<>
			<div className="row">
				<div className="col-md-6  login-bg-img ">
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
				<div className="col-md-6 main_logindiv">
					<div className="row justify-content-center">
						<div col-md-6>
							<button className="btn">
							<FontAwesomeIcon icon={faHome} />
								
							</button>
						</div>
						<div col-md-6>
							<button style={{ backgroundColor: "#1e82d2" }} className="btn">
							<FontAwesomeIcon icon={faCar} />
							</button>
						</div>
					</div>
					<div>
						<h1 className="h1style">Welcome to</h1>
						<h1 className="h1mainstyle"> Auto Camera App </h1>
					</div>
					<SignIn />
					<div className="anstyle">
						<br />
						<a style={{ color: "blue" }}> Forget Password?</a>
					</div>

					<br />

					<br />
					<FontAwesomeIcon icon={faCar} />
			
					<FontAwesomeIcon icon={faCar} />
					<i id="fastyle" className="fa fa-facebook fa-3x"></i>
					<i id="fastyle" className="fa fa-google fa-3x"></i>
					<i id="fastyle" className="fa fa-instagram fa-3x"></i>
					<div className="needaccount">
						<span>Need an account?</span>
						<span style={{ color: "blue" }}> Sign up</span>
					</div>
				</div>
			</div>
		</>
	);
}
