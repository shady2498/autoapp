import React from "react";




export default function account() {
	return (
		<>
		
<div className="profilebodycolour">
			<h1 className="profiletital">Account</h1>
			<text>Here is something information that you must to know.</text>
			<div className="row">
			<div className="col-md-3 col-sm-12  accountcard  shadow p-3 mb-6 bg-white rounded" >
			<img src="..\img\images.png" className="avatar"/>
			<br/>
			
			<strong className="Nameprofile"> Tomas Wilson </strong><br/>
			<text className="profileemail"> luckytom@rach </text>

		   <br/>
		   <text>Name</text>
		   <br/>
           <h4>Tomas Wilson </h4>
	       <hr className="new5"/>
			<text>Email Address</text>
			<br/>
			<h4>luckytom@rach</h4>
			<hr className="new5" />
			<h4>Change Password</h4>
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
			<div className="col-md-6 col-sm-12  accountprofile   shadow p-3 mb-6 bg-white rounded" >
			<h1 className="profileH1">Change Password</h1>
			
			<div className="profilename">
			<text className="paswordtext">Old Password</text>
		    <div class="md-form mt-0">
             <input class="form-control inputprofile" type="password" placeholder="" aria-label=""/>
            </div>
            <text className="paswordtext" >New Password</text>
		    <div class="md-form mt-0">
             <input class="form-control inputprofile" type="password" placeholder="" aria-label=""/>
            </div>
            <text className="paswordtext" >Re-Password</text>
		    <div class="md-form mt-0">
             <input class="form-control inputprofile" type="password" placeholder="" aria-label=""/>
            </div>
           

			
			</div>
			

			<button className="mt-sm mb-sm btn btn-Primay profilebtn">Save</button>
			</div>
			</div>
			</div>
		</>
	);
}
