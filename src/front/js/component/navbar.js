import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Back to home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
