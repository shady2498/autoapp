import React from "react";
import useForm from "../customhooks/useForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGoogle,
	faGooglePlusG,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FacebookLoginButton } from "react-social-login-buttons";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function SignIn() {
	const { handleChange, values } = useForm();
	// console.log(values);

	const saveInfo = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};

	return (
		<>
			<form onSubmit={(event) => saveInfo(event, values)}>
				<div className="input-group">
					<label htmlFor="email">
						<input
							className="input--style-1"
							type="email"
							name="email"
							placeholder="Email"
							value={values.email}
							onChange={handleChange}
						></input>
					</label>
				</div>
				<div className="input-group">
					<label htmlFor="password">
						<input
							className="input--style-1"
							type="password"
							name="password"
							placeholder="Password"
							value={values.password}
							onChange={handleChange}
						></input>
					</label>
				</div>
				<div className="checkbox-custom chekbox-primary">
					<input
						id="for-project"
						value="project"
						type="checkbox"
						name="for[]"
						required=""
					/>
					<label for="for-project">My Project</label>
				</div>
				<Link href="/home" passHref>
					<button
						type="button"
						className="mb-xs mt-xs mr-xs btn btn-primary btn-lg btn-block"
					>
						Sign In
					</button>
				</Link>
				<div className="anstyle">
					<a style={{ color: "blue" }}> Forget Password? </a>
					<br />
					<span
						className="login_with"
						style={{ color: "black", textAlign: "center" }}
					>
						or login with{" "}
					</span>
				</div>

				<div className="footer_icons">
					{/* 				
				<i id="fastyle" className="fa fa-facebook fa-3x"></i> */}

					{/* <FacebookLoginButton  /> */}
					{/*  <FontAwesomeIcon icon={faFacebookF } />  */}
					{/* <FontAwesomeIcon icon={['fas', 'goggle']} />
                <FontAwesomeIcon icon={['far', 'goggle']} /> */}
					{/* <FontAwesomeIcon icon={faGooglePlusG} /> */}
					<div className="bg-clr">
						<FacebookIcon id="fastyles" />
					</div>

					<i id="fastyle" className="fa fa-facebook fa-3x"></i>
					<i id="fastyle" className="fa fa-google fa-3x"></i>
					<i id="fastyle" className="fa fa-instagram fa-3x"></i>
					{/* <i className="fab fa-instagram"></i>*/}
				</div>
				<div className="needaccount">
					<span>Need an account?</span>
					<span style={{ color: "blue" }}>Sign up </span>
				</div>
			</form>
		</>
	);
}
