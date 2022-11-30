import React from "react";
import "./Login.css";

function Login(props) {
	return (
		<div className="login">
			<section className="login__container">
				<div className="login__content">
					<div className="CTA">
						<img
							className="CTA_Logo_One"
							src="/assets/images/cta-logo-one.svg"
							alt="CTA 1"
						/>
						<a href="/" className="signup_link">
							Get all there
						</a>
						<p className="description">
							Get Premier Access to Raya and the Last Dragon for an additional
							fee with a Disney+ subscription. As of 03/26/21, the price of
							Disney+ and The Disney Bundle will increase by $1.
						</p>
						<img
							className="CTA_Logo_Two"
							src="/assets/images/cta-logo-two.png"
							alt="CTA 2"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Login;
