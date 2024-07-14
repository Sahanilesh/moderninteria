import React from "react";
import "./Cards.css";
function Cards() {
	return (
		<div className="card-container">
			<div className="card-header">
				<img
					src="https://img.freepik.com/free-photo/sofa-green-living-room-with-copy-space_43614-905.jpg?t=st=1720957809~exp=1720961409~hmac=a1c6572b9b326e8cef1326c253e90f9afb750324d513082a548c2af7e3728ff8&w=1380"
					style={{
						height: "90%",
						width: "90%",
						borderRadius: "8px"
					}}
				/>
			</div>
			<div className="card-footer"></div>
		</div>
	);
}

export default Cards;
