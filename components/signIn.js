import React from "react";
import useForm from "../customhooks/useForm";
import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF,faGoogle,faGooglePlusG,faInstagram } from '@fortawesome/free-brands-svg-icons' 	
// import { FacebookLoginButton } from "react-social-login-buttons";
import FacebookIcon from '@material-ui/icons/Facebook';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF,faGoogle } from "@fortawesome/free-brands-svg-icons"
import InstagramIcon from '@material-ui/icons/Instagram';





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
													<input id="for-project" value="project" type="checkbox" name="for[]" required=""/>
													<label for="for-project">My Project</label>
													</div>
				<Link href="/home" passHref>
				<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary btn-lg btn-block">Sign In</button>
				</Link>
				<div className="anstyle">
                   
                    <a style={{color: "blue"}}> Forget Password? </a>
					<br />
					<span className="login_with" style={{color: "black",textAlign:"center"}}>or login with </span>
                </div>
				
				
			
				<div  className="row footer-5  justify-content-center ">

	{/* <div  clasName="footer_icons1" > */}

	<FontAwesomeIcon className="facebook-facebook1" id="fastyles" icon={faFacebookF}  />
				 <FontAwesomeIcon className="fa-google1" id="fastyles2" icon={faGoogle}  />
				 <InstagramIcon  id="fastyle2" className="fa-instagram"/>
			
	</div>
				
				{/* </div> */}
		
                <div class="needaccount">
                    <span>Need an account?</span><span style={{color: "blue"}}>Sign up </span>
                </div>

			</form>
		</>
	);
}
