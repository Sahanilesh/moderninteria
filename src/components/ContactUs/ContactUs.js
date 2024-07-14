import React from "react";
import "./ContactUs.css";

function ContactUs() {
	return (
		<div className="contact">
			<div className="contact-left">
				<h1 className="mid-text">Perfect</h1>
			</div>
			<div className="contact-right">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2065.3014317025454!2d72.94359435620402!3d19.199115491885518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9e68b74c069%3A0xb543814b46e06baf!2sAnnapurna%20Hotel!5e0!3m2!1sen!2sin!4v1720948108742!5m2!1sen!2sin"
					width="100%"
					height="100%"
					// style="border:0;"
					allowfullscreen="false"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
}

export default ContactUs;
