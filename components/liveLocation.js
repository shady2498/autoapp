import React from "react";

export default function liveLocation() {
	return (
		<div>
			<section className="map_sect_one">
				<div className="maparea">
					<iframe
						width="100%"
						height="1000px"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
			</section>
		</div>
	);
}
