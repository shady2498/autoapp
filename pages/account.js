import React from "react";




export default function account() {
	return (
		<>
		
<div className="profilebodycolour">
			<h1 className="profiletital">Account</h1>
			<text>Here is something information that you must to know.</text>
			<div className="row">
			<div className="col-3 accountcard  shadow p-3 mb-6 bg-white rounded" >
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
			<div className="col-6  accountprofile   shadow p-3 mb-6 bg-white rounded" >
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