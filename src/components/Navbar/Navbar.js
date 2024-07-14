import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="container">
			<div className="logo">
				<h1>Modern</h1>
			</div>
			<div className="nav-links">
				<a href="#home" className="nav-text">
					Home
				</a>
				<a href="#Services" className="nav-text">
					Services
				</a>
				<a href="#gallery" className="nav-text">
					Gallery
				</a>
				<a href="#Purpose" className="nav-text">
					Purpose
				</a>
			</div>
			<div className="contact-container">
				<a href="#contactus" className="contact-text">
					Contact Us
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
