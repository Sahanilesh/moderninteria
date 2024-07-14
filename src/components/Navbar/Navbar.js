import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="container">
			<div className="logo">
				<h1>Morden Interia</h1>
			</div>
			<div className="nav-links">
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#Purpose">Purpose</a>
					</li>
					<li>
						<a href="#Services">Services</a>
					</li>
					<li>
						<a href="#gallery">Art Gallery</a>
					</li>
					<li>
						<a href="#contactus">Contact Us</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
